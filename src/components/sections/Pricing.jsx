import plans from "../data/plans";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="min-h-screen border-t-4 border-[#DF4F3D] bg-[#FFF5EB] px-5 py-16 md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-3 text-xs font-medium text-black/40">
            Membership plan
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
            Pick the plan that
            <br />
            fits your team.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => {
            const isGrowth =
              plan.id === "growth" || plan.featured === true;

            return (
              <article
                key={plan.id}
                className={`overflow-hidden rounded-md bg-white ${
                  isGrowth
                    ? "border-2 border-[#DF4F3D]"
                    : "border border-black/10"
                }`}
              >
                {/* Plan Header */}
                <div
                  className={`px-4 py-3 ${
                    isGrowth
                      ? "bg-[#DF4F3D] text-white"
                      : "bg-[#EFEFEF] text-black"
                  }`}
                >
                  <h3 className="text-sm font-semibold">
                    {plan.name}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="flex min-h-[390px] flex-col px-4 py-5">

                  {/* Price */}
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl">
                      {plan.price}
                    </span>

                    <span className="mb-1 text-[9px] text-black/45">
                      {plan.suffix}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 min-h-[40px] text-xs leading-5 text-black/55">
                    {plan.description}
                  </p>

                  {/* Button */}
                  <button
                    type="button"
                    className="mt-4 w-full rounded-full bg-black px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-black/80"
                  >
                    Book a Now
                  </button>

                  {/* Divider */}
                  <div className="my-5 border-t border-black/10" />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[11px] leading-4 text-black/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[1px] shrink-0 text-[10px] font-bold text-green-600"
                        >
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}