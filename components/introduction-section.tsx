export function IntroductionSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/aloyo.png"
                  alt="Ms. Daphine Harriet Aloyo - CEO & Co-Founder"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/70" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/70" />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
                Welcome to the home of Uganda's largest professional female-based clothing manufacturer meeting the needs
                of fashion lovers who speaks through style.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
                We are a one-stop shop for African inspired female apparel for great fashion.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
                We are here to drive the change Africa need; make you look elegant and help you unlock success in today's
                competitive fashion market. At the heart of everything we do is <span className="font-semibold text-primary">Style</span> - a
                challenger to the norm, and an appearance that's alluring and bold.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
                We have here high-quality clothes for you &amp; your business. If fashion is a never-ending pursuit of style,
                then here is what will happen after you've found it. Let's create a fairer, affordable and smarter future of
                African fashion together. Africa doesn't need competition, Africa needs collaboration and Partnership for great impact.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty font-semibold">
                Are you looking for a trendy fashion or thinking of launching your business today? – Please talk to our
                marketing experts Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
