import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LegalComp() {
  const { t } = useTranslation();
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-zinc-50 px-6 py-16 text-zinc-900">
      <section className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          {t("legal.backToMap")}
        </Link>

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            {t("legal.label")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("legal.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {t("legal.intro")}
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.aboutTitle")}
            </h2>
            <p>{t("legal.aboutText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.publicTitle")}
            </h2>
            <p>{t("legal.publicText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.collectTitle")}
            </h2>
            <p>{t("legal.collectText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.useTitle")}
            </h2>
            <p>{t("legal.useText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.moderationTitle")}
            </h2>
            <p>{t("legal.moderationText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.responsibilityTitle")}
            </h2>
            <p>{t("legal.responsibilityText")}</p>
          </section>

          <section className="rounded-3xl border border-zinc-200 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.crisisTitle")}
            </h2>
            <p>{t("legal.crisisText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.changesTitle")}
            </h2>
            <p>{t("legal.changesText")}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("legal.contactTitle")}
            </h2>
            <p>{t("legal.contactText")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}