import { Component, input, type Type } from '@angular/core';
import { TemplateComponent as KcTemplateComponent } from '@keycloakify/angular/login/template';

/**
 * Wraps the Keycloakify template with the Ελλάδα 2.0 / NextGenerationEU visual
 * identity required of recipients of RRF funding (Οδηγός Επικοινωνίας, §3.2).
 *
 * Must NOT reuse the library's `kc-root` selector: Angular includes a
 * standalone component in its own template scope (so recursive components
 * work), so `<kc-root>` below would match both this component and the imported
 * one, failing at runtime with NG0300.
 *
 * Asset URLs must go through `import.meta.env.BASE_URL` — the Keycloakify Vite
 * plugin rewrites it to the theme's `resourcesPath` at runtime, so the same
 * markup works under `ng serve`, in Storybook and in Keycloak.
 */
@Component({
  selector: 'kc-theme-root',
  imports: [KcTemplateComponent],
  template: `
    <div class="eu-page">
      <header class="eu-banner">
        <div class="eu-banner__inner">
          <img
            class="eu-banner__body-logo"
            [src]="bodyLogoUrl"
            alt="Ανεξάρτητη Αρχή Δημοσίων Εσόδων"
          />
          <img
            class="eu-banner__identity"
            [src]="identityUrl"
            alt="Ελλάδα 2.0 – Εθνικό Σχέδιο Ανάκαμψης και Ανθεκτικότητας. Με τη χρηματοδότηση της Ευρωπαϊκής Ένωσης – NextGenerationEU"
          />
        </div>
      </header>

      <kc-root
        class="eu-page__main"
        [page]="page()"
        [userProfileFormFields]="userProfileFormFields()"
      ></kc-root>

      <footer class="eu-footer">
        <p
          class="eu-footer__text"
          lang="el"
        >
          {{ fundingStatement }}
        </p>
      </footer>
    </div>
  `,
})
export class TemplateComponent {
  // Set by kc.gen.ts on the bootstrapped root component, then forwarded to the
  // library template.
  page = input<Type<unknown>>();
  userProfileFormFields = input<Type<unknown>>();

  readonly identityUrl = `${import.meta.env.BASE_URL}greece20-eu-funding.png`;
  readonly bodyLogoUrl = `${import.meta.env.BASE_URL}implementing-body-logo.svg`;

  readonly fundingStatement =
    'Το έργο Σύστημα Παρακολούθησης Επαγγελματικών Οχημάτων και Εμπορευματοκιβωτίων, ' +
    'υλοποιήθηκε στο πλαίσιο του Εθνικού Σχεδίου Ανάκαμψης και Ανθεκτικότητας Ελλάδα 2.0 ' +
    'με τη χρηματοδότηση της Ευρωπαικής Ένωσης NextGenerationEU';
}
