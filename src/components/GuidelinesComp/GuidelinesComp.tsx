import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function GuidelinesComp() {
  const { t } = useTranslation();
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white px-6 py-16 text-zinc-900">
      <section className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          {t("guidelines.backToMap")}
        </Link>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            {t("guidelines.label")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("guidelines.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {t("guidelines.intro")}
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.whatTitle")}
            </h2>
            <p>
              {t("guidelines.whatText")}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.dontPostTitle")}
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {t("guidelines.dontPostPrivate")}
              </li>
              <li>
                {t("guidelines.dontPostDetails")}
              </li>
              <li>
                {t("guidelines.dontPostThreats")}
              </li>
              <li>{t("guidelines.dontPostHate")}</li>
              <li>
                {t("guidelines.dontPostExplicit")}
              </li>
              <li>
                {t("guidelines.dontPostSpam")}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.respectTitle")}
            </h2>
            <p>
              {t("guidelines.respectText")}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.publicTitle")}
            </h2>
            <p>
              {t("guidelines.publicText")}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.moderationTitle")}
            </h2>
            <p>
              {t("guidelines.moderationText")}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.harmfulTitle")}
            </h2>
            <p>
              {t("guidelines.harmfulText")}
            </p>
          </section>

          <section className="rounded-3xl border border-zinc-200 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.strugglingTitle")}
            </h2>
            <p>
              {t("guidelines.strugglingText")}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              {t("guidelines.finalTitle")}
            </h2>
            <p>
              {t("guidelines.finalText")}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
