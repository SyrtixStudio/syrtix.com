const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'pages', 'Packages.jsx');
const content = fs.readFileSync(FILE, 'utf-8');
const lines = content.split('\n');

// Find boundaries
const saasTitleStart = lines.findIndex(l => l.includes('copy.saasSection.title'));
let saasStart = -1;
if (saasTitleStart !== -1) {
    // go back to the wrapping div
    for (let i = saasTitleStart; i >= 0; i--) {
        if (lines[i].includes('<div className="mb-6 max-w-3xl">')) {
            saasStart = i;
            break;
        }
    }
}

const saasOfferStart = lines.findIndex(l => l.includes('copy.saasOffer.badge'));
let saasEnd = -1;
if (saasOfferStart !== -1) {
    let depth = 0;
    // Find the enclosing div
    let enclosingDivStart = -1;
    for (let i = saasOfferStart; i >= 0; i--) {
        if (lines[i].includes('<div className="mb-10 border-2')) {
            enclosingDivStart = i;
            break;
        }
    }
    
    if (enclosingDivStart !== -1) {
        for (let i = enclosingDivStart; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                const substr = lines[i].substring(j);
                if (substr.startsWith('<div')) depth++;
                if (substr.startsWith('</div')) depth--;
            }
            if (depth === 0 && i > enclosingDivStart) {
                saasEnd = i;
                break;
            }
        }
    }
}

const enterprisePlanStart = lines.findIndex(l => l.includes('{enterprisePlan && ('));
let enterprisePlanEnd = -1;
if (enterprisePlanStart !== -1) {
    let depth = 0;
    for (let i = enterprisePlanStart; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            const substr = lines[i].substring(j);
            if (substr.startsWith('<div')) depth++;
            if (substr.startsWith('</div')) depth--;
        }
        if (depth === 0 && i > enterprisePlanStart + 1) { // plus 1 to bypass the conditional wrapper if it has no div itself but it does have divs inside
            // find the closing brace
            for(let k = i; k < lines.length; k++) {
                if(lines[k].includes(')}')) {
                    enterprisePlanEnd = k;
                    break;
                }
            }
            break;
        }
    }
}

if (saasStart !== -1 && saasEnd !== -1 && enterprisePlanEnd !== -1) {
    console.log(`SaaS Block: ${saasStart + 1} to ${saasEnd + 1}`);
    console.log(`Enterprise Block End: ${enterprisePlanEnd + 1}`);

    const saasBlock = lines.slice(saasStart, saasEnd + 1);
    
    // Remove the SaaS block from its original position
    const withoutSaas = [
        ...lines.slice(0, saasStart),
        ...lines.slice(saasEnd + 1)
    ];

    // Recalculate enterprisePlanEnd in the new array
    const newEnterprisePlanEnd = withoutSaas.findIndex((l, idx) => idx >= enterprisePlanStart - (saasEnd - saasStart + 1) && l.includes(')}'));

    if(newEnterprisePlanEnd !== -1) {
      // Find the closing ) } for the enterprisePlan
      let actualEnd = newEnterprisePlanEnd;
      // We want to insert after the ')}'
      
      const newLines = [
          ...withoutSaas.slice(0, actualEnd + 1),
          '',
          ...saasBlock,
          ...withoutSaas.slice(actualEnd + 1)
      ];

      fs.writeFileSync(FILE, newLines.join('\n'), 'utf-8');
      console.log('✅ SaaS block moved successfully!');
    } else {
      console.log('❌ Could not find Enterprise block end in modified array.');
    }
} else {
    console.log('❌ Could not find boundaries.');
    console.log({saasStart, saasEnd, enterprisePlanEnd});
}
