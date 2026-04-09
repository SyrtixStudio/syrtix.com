---
name: meta-ads-tracking
description: 'Plan and implement Meta Ads tracking infrastructure, including Meta Pixel and Conversion API (CAPI). Use when setting up event tracking for leads, purchases, or custom conversions on Syrtix projects.'
argument-hint: 'Describe the conversion event or page to track.'
user-invocable: true
---

# Meta Ads Tracking Skill

## When to Use
- Setting up a new Meta Pixel on a landing page or website.
- Configuring standard events (Lead, Contact, ViewContent, CompleteRegistration).
- Implementing the Conversion API (CAPI) to bypass browser limitations.
- Troubleshooting "No activity" or "Deduplication" issues in Events Manager.

## Goals
- Achieve a High Event Match Quality score on Meta Events Manager.
- Ensure 100% attribution accuracy for paid traffic.
- Implement tracking that respects privacy but captures business-critical data.

## Procedure
1. **Pixel Base Code:** Ensure the base pixel is loaded in the `<head>` of all pages.
2. **Event Identification:** Define the "Money Event" (usually 'Lead' for Syrtix).
3. **Trigger Logic:** 
   - Use `fbq('track', 'Lead')` on thank-you page loads or successful form submissions.
   - For buttons, use click listeners to trigger the event.
4. **Data Enrichment:** Send additional parameters whenever possible (email, phone - hashed - to improve match quality).
5. **CAPI Setup:** If using n8n or a backend, send events server-side to complement the pixel.
6. **Verification:** Use the "Meta Pixel Helper" extension and the "Test Events" tool in Events Manager.

## Critical Meta Events for Syrtix
- **Lead:** Triggered when a user leaves their WhatsApp or email in the IA Auditor or contact form.
- **Contact:** Triggered when the user clicks the floating WhatsApp button.
- **ViewContent:** Triggered on specific service pages (e.g., E-commerce service).
- **Custom Event (IA_Audit_Completed):** Specifically for tracking users who finished the AI audit.

## Deduplication Strategy
- When sending both Pixel and Capi events, ensure the `event_id` is identical for the same user action to avoid double counting.

---
*Syrtix: Growth Through Engineering.*
