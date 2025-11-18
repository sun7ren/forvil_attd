import Header from "../../components/header"
import Image from "next/image";

export default function education() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-4xl mx-auto"
              style={{ color: '#795F02', fontFamily: 'Roboto, sans-serif' }}
            >
              A <span style={{ color: '#7B2300', fontStyle: 'italic' }}>Decision Support </span>
              and <span style={{ color: '#7B2300', fontStyle: 'italic' }}>Learning System</span> for Safe and Suitable
              Housing Choices
            </h1>
            
          </div>
          

      </section>
      </main>
    </>
  );
}
