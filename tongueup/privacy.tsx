/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { currentLanguage } from './i18n'

function PrivacyPolicyPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="brand-glow">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            {t('button.goBack')}
          </a>
          <div className="rounded-[22px] border border-line bg-surface p-6 shadow-card sm:p-10">
            {currentLanguage() === 'fr' ? (
              <PrivacyPolicyFRENCH />
            ) : (
              <PrivacyPolicyENGLISH />
            )}
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

export default PrivacyPolicyPage

const PrivacyPolicyENGLISH = () => {
  const { t } = useTranslation()
  return (
    <>
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {t('privacy_policy')}
        </h1>
        <p className="text-lg leading-relaxed text-ink-2">
          This privacy policy applies to the TongueUp app (hereby referred to as
          "Application") for mobile devices that was created by Jyben Larcher
          (hereby referred to as "Service Provider") as a Free service. This
          service is intended for use "AS IS".
        </p>
      </header>

      <main className="space-y-10">
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Information Collection and Use
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              The Application does not collect, transmit, or store any
              personally identifiable information or geolocation data. It does
              not use or collect any data for marketing, advertising, or
              business analytics purposes.
            </p>
            <p>
              All data generated through the use of the Application (e.g.,
              reminders, usage settings) is stored locally on your device. This
              data:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Is not transmitted to any external server.</li>
              <li>Is not shared with third parties.</li>
              <li>Is only accessible by you.</li>
              <li>
                Can be deleted at any time by you via the app's built-in
                features or by uninstalling the Application.
              </li>
            </ul>
            <div>
              <p className="mb-2">The Application does not gather:</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Location information (precise or approximate)</li>
                <li>IP addresses</li>
                <li>Device identifiers</li>
                <li>Operating system information</li>
                <li>Usage analytics (e.g., time on page, click behavior)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Third-Party Access
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              The Application does not transmit or share any data with third
              parties.
            </p>
            <p>
              However, the Application may use third-party libraries or services
              necessary for its operation (such as Google Play Services). These
              providers may collect limited, anonymized operational data per
              their own privacy policies:
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>Google Play Services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Data Retention and User Control
          </h2>
          <ul className="ml-4 list-inside list-disc space-y-2 leading-relaxed text-ink-2">
            <li>
              All data remains on your device and is fully under your control.
            </li>
            <li>
              You may delete all app data at any time from within the app using
              its data reset or clear function.
            </li>
            <li>
              Alternatively, you may uninstall the Application, which removes
              all associated data from your device.
            </li>
            <li>
              The Service Provider does not have access to or control over any
              of your data.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            GDPR Compliance
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              In compliance with the General Data Protection Regulation (GDPR):
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                The Application does not collect or process personal data as
                defined under GDPR.
              </li>
              <li>No data is transmitted to or stored on any server.</li>
              <li>
                No profiling, behavioral analysis, or automated decision-making
                is performed.
              </li>
              <li>
                Users retain full control over their data and may delete it at
                any time from the app.
              </li>
            </ul>
            <p>
              As no data is collected or stored by the Service Provider, there
              is no need for consent mechanisms, data access requests, or data
              portability options.
            </p>
            <p>
              If you have any questions regarding GDPR compliance, please
              contact the Service Provider at{' '}
              <a
                href="mailto:jybenlarcher@gmail.com"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                jybenlarcher@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Children
          </h2>
          <p className="leading-relaxed text-ink-2">
            The Application does not knowingly collect data from children under
            the age of 13. As no personal or identifiable data is collected or
            stored, the Application is safe for users of all ages.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Security
          </h2>
          <p className="leading-relaxed text-ink-2">
            Although no external data is processed, the Service Provider
            recommends that users maintain appropriate device-level security
            measures (such as passcodes or biometrics) to protect locally stored
            data.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Changes
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              This Privacy Policy may be updated from time to time. Any changes
              will be reflected by updating this page. You are advised to
              consult this Privacy Policy regularly. Continued use of the
              Application after any changes constitutes your acceptance of the
              revised policy.
            </p>
            <p className="font-medium">
              This Privacy Policy is effective as of 2025-06-06.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Your Consent
          </h2>
          <p className="leading-relaxed text-ink-2">
            By using the Application, you consent to the terms of this Privacy
            Policy.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Contact Us
          </h2>
          <div className="leading-relaxed text-ink-2">
            <p className="mb-4">
              If you have any questions about this Privacy Policy or your rights
              under data protection laws, please contact the Service Provider
              at:
            </p>
            <div className="flex items-center space-x-2 text-lg">
              <span>📧</span>
              <a
                href="mailto:jybenlarcher@gmail.com"
                className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
              >
                jybenlarcher@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const PrivacyPolicyFRENCH = () => {
  const { t } = useTranslation()
  return (
    <>
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {t('privacy_policy')}
        </h1>
        <p className="text-lg leading-relaxed text-ink-2">
          Cette politique de confidentialité s'applique à l'application mobile
          TongueUp (ci-après dénommée « l'Application »), créée par Jyben
          Larcher (ci-après dénommé « le Fournisseur de service ») en tant que
          service gratuit. Ce service est fourni tel quel (« EN L'ÉTAT »).
        </p>
      </header>

      <main className="space-y-10">
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Collecte et Utilisation des Informations
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              L'Application ne collecte, ne transmet, ni ne stocke aucune
              information personnelle identifiable ni donnée de géolocalisation.
              Elle n'utilise ni ne collecte aucune donnée à des fins de
              marketing, de publicité ou d'analyse commerciale.
            </p>
            <p>
              Toutes les données générées par l'utilisation de l'Application
              (par exemple : rappels, préférences d'utilisation) sont stockées
              localement sur votre appareil. Ces données :
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Ne sont pas transmises à un serveur externe ;</li>
              <li>Ne sont pas partagées avec des tiers ;</li>
              <li>Sont uniquement accessibles par vous ;</li>
              <li>
                Peuvent être supprimées à tout moment via les fonctionnalités
                intégrées de l'Application ou en désinstallant l'Application.
              </li>
            </ul>
            <div>
              <p className="mb-2">L'Application ne collecte pas :</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  D'informations de localisation (précises ou approximatives)
                </li>
                <li>D'adresses IP</li>
                <li>D'identifiants de l'appareil</li>
                <li>D'informations sur le système d'exploitation</li>
                <li>De données d'analyse (ex. : durée de navigation, clics)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Accès par des Tiers
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>L'Application ne partage aucune donnée avec des tiers.</p>
            <p>
              Cependant, l'Application peut utiliser des bibliothèques ou
              services tiers nécessaires à son bon fonctionnement (comme Google
              Play Services). Ces services peuvent collecter des données
              techniques anonymisées selon leurs propres politiques de
              confidentialité :
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>Google Play Services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Conservation des Données et Contrôle Utilisateur
          </h2>
          <ul className="ml-4 list-inside list-disc space-y-2 leading-relaxed text-ink-2">
            <li>
              Toutes les données sont stockées localement sur votre appareil et
              restent sous votre contrôle exclusif.
            </li>
            <li>
              Vous pouvez supprimer toutes les données à tout moment via les
              paramètres de l'application.
            </li>
            <li>
              Vous pouvez également désinstaller l'Application pour effacer
              toutes les données associées.
            </li>
            <li>
              Le Fournisseur de service n'a aucun accès ni contrôle sur vos
              données.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Conformité au RGPD
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              En conformité avec le Règlement Général sur la Protection des
              Données (RGPD) :
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                L'Application ne collecte ni ne traite de données personnelles
                au sens du RGPD.
              </li>
              <li>
                Aucune donnée n'est transmise ni stockée sur des serveurs
                externes.
              </li>
              <li>
                Aucun profilage, suivi comportemental ou prise de décision
                automatisée n'est effectué.
              </li>
              <li>
                Les utilisateurs gardent un contrôle total sur leurs données et
                peuvent les supprimer à tout moment.
              </li>
            </ul>
            <p>
              Étant donné qu'aucune donnée n'est collectée par le Fournisseur de
              service, il n'est pas nécessaire de mettre en place des mécanismes
              de consentement, de demande d'accès ou de portabilité des données.
            </p>
            <p>
              Pour toute question relative à la conformité RGPD, veuillez
              contacter le Fournisseur de service à :{' '}
              <a
                href="mailto:jybenlarcher@gmail.com"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                jybenlarcher@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Enfants
          </h2>
          <p className="leading-relaxed text-ink-2">
            L'Application ne collecte pas intentionnellement de données
            concernant des enfants de moins de 13 ans. Aucune information
            personnelle identifiable n'étant collectée ou stockée, l'Application
            peut être utilisée en toute sécurité par tous les âges.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Sécurité
          </h2>
          <p className="leading-relaxed text-ink-2">
            Bien qu'aucune donnée ne soit traitée à l'extérieur de votre
            appareil, le Fournisseur de service recommande de sécuriser votre
            appareil à l'aide de méthodes classiques (code, biométrie) afin de
            protéger vos données locales.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Modifications
          </h2>
          <div className="space-y-4 leading-relaxed text-ink-2">
            <p>
              Cette Politique de Confidentialité peut être mise à jour à tout
              moment. Toute modification sera reflétée sur cette page. Il vous
              est conseillé de consulter régulièrement cette Politique. En
              continuant à utiliser l'Application après la publication de
              modifications, vous acceptez celles-ci.
            </p>
            <p className="font-medium">
              Date d'entrée en vigueur de cette politique de confidentialité :
              2025-06-06
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Votre Consentement
          </h2>
          <p className="leading-relaxed text-ink-2">
            En utilisant l'Application, vous consentez à la présente Politique
            de Confidentialité.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Contact
          </h2>
          <div className="leading-relaxed text-ink-2">
            <p className="mb-4">
              Pour toute question concernant cette politique ou vos droits en
              matière de protection des données, vous pouvez contacter le
              Fournisseur de service :
            </p>
            <div className="flex items-center space-x-2 text-lg">
              <span>📧</span>
              <a
                href="mailto:jybenlarcher@gmail.com"
                className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
              >
                jybenlarcher@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
