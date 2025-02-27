# Checkbox

Der Input-Typ **_Checkbox_** generiert eine rechteckige Box, die durch Anklicken aktiviert und wieder deaktiviert wird. In aktiviertem Zustand befindet sich ein farbiger Haken in der Box.

## Konstruktion

### Code

```html
<kol-input-checkbox _label="false">Ich stimme der <kol-link _href="#" _label="Datenschutzerklärung"></kol-link> zu.</kol-input-checkbox>
<kol-input-checkbox _variant="switch" _label="Geburtsdatum anzeigen?"></kol-input-checkbox>
<kol-input-checkbox _variant="button" _label="Schalter aktiviert" _checked></kol-input-checkbox>
<kol-input-checkbox _variant="button" _label="Schalter deaktiviert"></kol-input-checkbox>
```

### Beispiel

<kol-input-checkbox _label="false">Ich stimme der <kol-link _href="#" _label="Datenschutzerklärung"></kol-link> zu.</kol-input-checkbox>
<kol-input-checkbox _variant="switch" _label="Geburtsdatum anzeigen?"></kol-input-checkbox>
<kol-input-checkbox _variant="button" _label="Schalter aktiviert" _checked></kol-input-checkbox>
<kol-input-checkbox _variant="button" _label="Schalter deaktiviert"></kol-input-checkbox>

## Verwendung

Checkboxen werden als Einzelelement oder als Liste beliebig vieler Checkboxen verwendet. Sie ermöglichen den Nutzer:innen, aus einer vordefinierten Anzahl von Möglichkeiten eine oder mehrere auszuwählen.

### Varianten

Mittels des Attributs **`_variant`** können folgende Varianten ausgewählt werden (Beispiele siehe oben):

- `button`: wechselt das Icon je nach Zustand (Beispiel 3+4)
- `switch`: verwandelt die Checkbox in einen horizontalen Schalter, hierbei gilt rechts als aktiv und links als inaktiv. (Beispiel 2)

### Best practices

- Verwenden Sie eine einzelne Checkbox, wenn Sie von den Nutzer:innen eine einfach Bestätigung wünschen, z.B. Akzeptieren der Datenschutzerklärung.
- Verwenden Sie eine Gruppe von Checkboxen, um den Nutzer:innen die Möglichkeit zu geben einen oder mehrere Werte auszuwählen.

## Barrierefreiheit

Vermeiden Sie die Verwendung von vielen Checkboxen auf einer Seite, da Ihre Inhalte hierdurch schnell unübersichtlich und lang werden. Prüfen Sie in solchen Anwendungsfällen die Verwendung einer <kol-link _href="/docs/components/select" _label="/docs/components/select">Select-Box mit **`_multiple`**</kol-link>.

Achten Sie darauf, jeder Checkbox ein Label zuzuweisen, da dieses von Screenreadern vorgelesen wird und so eine eindeutige Identifikation des Eingabefeldes ermöglicht.

### Tastatursteuerung

| Taste  | Funktion                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------ |
| `Tab`  | Fokussiert die Checkbox bzw. ermöglicht den Wechsel zwischen Checkboxen einer Liste.                               |
| `Leer` | Aktiviert bzw. deaktiviert die Checkbox. Der Zustand **_Indeterminate_** ist über die Tastatur nicht herzustellen. |

## Links und Referenzen

- <kol-link _href="https://www.w3.org/TR/wai-aria-practices/#checkbox" _label="https://www.w3.org/TR/wai-aria-practices/#checkbox" _target="_blank"></kol-link>
- <kol-link _href="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _label="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _target="_blank"></kol-link>

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute        | Description                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                          | Default     |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_accessKey`     | `_access-key`    | Defines which key combination can be used to trigger or focus the interactive element of the component.                                                                   | `string \| undefined`                                                                                                                                                                                                                                                                                         | `undefined` |
| `_alert`         | `_alert`         | Defines whether the screen-readers should read out the notification.                                                                                                      | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `true`      |
| `_checked`       | `_checked`       | Defines whether the checkbox is checked or not. Can be read and written.                                                                                                  | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `false`     |
| `_disabled`      | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                                    | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `undefined` |
| `_error`         | `_error`         | Defines the error message text.                                                                                                                                           | `string \| undefined`                                                                                                                                                                                                                                                                                         | `undefined` |
| `_hideLabel`     | `_hide-label`    | Hides the label and shows the description in a Tooltip instead.                                                                                                           | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `undefined` |
| `_hint`          | `_hint`          | Defines the hint text.                                                                                                                                                    | `string \| undefined`                                                                                                                                                                                                                                                                                         | `''`        |
| `_icon`          | `_icon`          | Defines the icon classnames (e.g. `_icon="fa-solid fa-user"`).                                                                                                            | `string \| undefined \| { checked: string; indeterminate?: string \| undefined; unchecked?: string \| undefined; } & { checked?: string \| undefined; indeterminate: string; unchecked?: string \| undefined; } & { checked?: string \| undefined; indeterminate?: string \| undefined; unchecked: string; }` | `undefined` |
| `_id`            | `_id`            | Defines the internal ID of the primary component element.                                                                                                                 | `string \| undefined`                                                                                                                                                                                                                                                                                         | `undefined` |
| `_indeterminate` | `_indeterminate` | Puts the checkbox in the indeterminate state, does not change the value of \_checked.                                                                                     | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `undefined` |
| `_label`         | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.              | `boolean \| string \| undefined`                                                                                                                                                                                                                                                                              | `undefined` |
| `_name`          | `_name`          | Defines the technical name of an input field.                                                                                                                             | `string \| undefined`                                                                                                                                                                                                                                                                                         | `undefined` |
| `_on`            | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                                 | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \| undefined`                                                                                                                                                                                                                      | `undefined` |
| `_required`      | `_required`      | Makes the input element required.                                                                                                                                         | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `undefined` |
| `_tabIndex`      | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                          | `number \| undefined`                                                                                                                                                                                                                                                                                         | `undefined` |
| `_tooltipAlign`  | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                                 | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                                                                                                                                                                                                         | `'top'`     |
| `_touched`       | `_touched`       | Shows if the input was touched by a user.                                                                                                                                 | `boolean \| undefined`                                                                                                                                                                                                                                                                                        | `false`     |
| `_type`          | `_type`          | <span style="color:red">**[DEPRECATED]**</span> Verwende stattdessen das Attribute \_variant.<br/><br/>Deprecated: Defines which variant should be used for presentation. | `"button" \| "checkbox" \| "default" \| "switch" \| undefined`                                                                                                                                                                                                                                                | `undefined` |
| `_value`         | `_value`         | Defines the value of the input.                                                                                                                                           | `boolean \| null \| number \| object \| string \| undefined`                                                                                                                                                                                                                                                  | `true`      |
| `_variant`       | `_variant`       | Defines which variant should be used for presentation.                                                                                                                    | `"button" \| "checkbox" \| "default" \| "switch" \| undefined`                                                                                                                                                                                                                                                | `undefined` |

## Slots

| Slot | Description                    |
| ---- | ------------------------------ |
|      | Die Beschriftung der Checkbox. |

## Dependencies

### Depends on

- kol-input
- [kol-icon](../icon)
- [kol-tooltip-wc](../tooltip)

### Graph

```mermaid
graph TD;
  kol-input-checkbox --> kol-input
  kol-input-checkbox --> kol-icon
  kol-input-checkbox --> kol-tooltip-wc
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  kol-alert --> kol-alert-wc
  kol-alert-wc --> kol-heading-wc
  kol-alert-wc --> kol-button-wc
  kol-alert-wc --> kol-icon
  style kol-input-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

---
