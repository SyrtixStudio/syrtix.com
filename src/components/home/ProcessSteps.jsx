import { processSteps } from '../../data';

function ProcessSteps() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Nuestro <span className="text-primary">proceso</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            Un método probado para entregar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              data-aos="flip-up"
              data-aos-delay={idx * 100}
              className="text-center border border-gray-200 bg-white transition-colors duration-300 hover:border-primary hover:bg-primary/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-gray-900 font-bold text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
