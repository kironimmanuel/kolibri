# Badge

Mit **Badges** können Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.
KoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die Möglichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben.

## Konstruktion

### Code

```html
<kol-badge _label="Beispieltext" _color="#b7e4b4" _icon="codicon codicon-home"></kol-badge>
<kol-badge _label="Beispieltext" _color="#0c8703" _icon="codicon codicon-home"></kol-badge>
```

### Beispiel

<kol-badge _label="Beispieltext" _color="#b7e4b4" _icon="codicon codicon-home"></kol-badge>
<kol-badge _label="Beispieltext" _color="#0c8703" _icon="codicon codicon-home"></kol-badge>

## Verwendung

### Label im Badge

Der Text, der im Badge angezeigt werden soll, wird über das Attribut **\_label** übergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.
Das Element `<kol-badge></kol-badge>` beinhaltet selbst keinen Text.

### Hintergrundfarbe des Badge

Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardmäßig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. Über das Attribut **\_color** können andere Hintergrundfarben gewählt werden.

Die Angabe der gewünschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. **\_color="#000000"** für schwarz.

Die Textfarbe wird automatisch als Kontrastfarbe zur gewählten Hintergrundfarbe errechnet.

### Icon

Ein Icon (**`_icon`**) kann entweder als String angegeben werden, oder als Objekt.
Als String übergeben Sie die Iconklasse (z.B.: `_icon="codicon codicon-home`), das Icon wird links vom Text angezeigt.
Das Objekt ist vom Typ `KoliBriAllIcon`, kann also einen oder mehrere der Schlüssel `top`, `right`, `bottom` und `left` besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ `KoliBriCustomIcon`, welches aus `icon` (String, siehe oben) und `style` (optional, Styleobjekt) besteht.

<kol-link _href="https://microsoft.github.io/vscode-codicons/dist/codicon.html" _label="https://microsoft.github.io/vscode-codicons/dist/codicon.html" _target="_blank" _label="Übersicht Codicons"></kol-link>

### Nur Icon anzeigen

Mit dem Attribut **`_hide-label`** kann festgelegt werden, dass nur das mit dem Attribut **`_icon`** gewählte Icon angezeigt wird. Der Wert im Attribut **`_label`** wird in diesem Fall ignoriert.

### Schriftschnitt

Der Schriftschnitt wird vom Host übernommen, kann also via CSS von außen gesetzt werden.

### Best practices

- Verwenden Sie Badges, um wichtige Informationen in unmittelbarer Nähe des jeweiligen Elements anzuzeigen.
- Verwenden Sie Badges, um auf geänderte Werte oder einen geänderten Status aufmerksam zu machen.
- Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein „ungelesener Bericht“ oder eine Aktivitätsbenachrichtigung.
- Behalten Sie in gleichen Anwendungsfällen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gewährleisten.

## Anwendungsfälle

### Badge als Aufzählungszeichen verwenden

<ul class="m-0 p-0">
  <li class="flex gap-2">
    <kol-badge _label="1" _color="#0747a6"></kol-badge>
    <kol-heading _level="2" _label="Auswahl Anliegen"></kol-heading>
  </li>
  <li class="flex gap-2">
    <kol-badge _label="2" _color="#0747a6"></kol-badge>
    <kol-heading _level="2" _label="Auswahl Amtsstelle"></kol-heading>
  </li>
  <li class="flex gap-2">
    <kol-badge _label="3" _color="#0747a6"></kol-badge>
    <kol-heading _level="2" _label="Terminauswahl"></kol-heading>
  </li>
</ul>

## Barrierefreiheit

Für die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gewählten Hintergrundfarbe heraus. Möglich sind die Textfarben **schwarz** und **weiß**, die in Abhängigkeit zur Hintergrundfarbe ausgegeben werden.

Die zusätzliche Ausgabe eines **Icon** gewährleistet, dass der Nutzer auch hierüber die Art der Information erfassen kann.

<kol-alert _type="info">Eine explizite Angabe der Textfarbe ist nicht möglich.</kol-alert>

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute       | Description                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default     |
| --------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_color`              | `_color`        | Defines the backgroundColor and foregroundColor.                                                                                                                                                                                                                                                                                         | `string \| undefined \| { backgroundColor: string; color: string; } \| { backgroundColor: string; foregroundColor: Stringified<CharacteristicColors>; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `'#000'`    |
| `_hideLabel`          | `_hide-label`   | <span style="color:red">**[DEPRECATED]**</span> Will be removed in the next major version.<br/><br/>Deprecated: ⚠️ We do not support the `_hide-label` property for the `kol-badge` element, since it would not be accessible without visible labeling. A separate tooltip is not planed, because a badge is not an interactive element. | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `false`     |
| `_icon`               | `_icon`         | Defines the icon classnames (e.g. `_icon="fa-solid fa-user"`).                                                                                                                                                                                                                                                                           | `KoliBriHorizontalIcon & KoliBriVerticalIcon \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `_iconOnly`           | `_icon-only`    | <span style="color:red">**[DEPRECATED]**</span> use \_hide-label<br/><br/>Deprecated: Hides the label and shows the description in a Tooltip instead.                                                                                                                                                                                    | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_label` _(required)_ | `_label`        | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).                                                                                                                                                                                                                       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined` |
| `_smartButton`        | `_smart-button` | Allows to add a button with an arbitrary action within the element (\_hide-label only).                                                                                                                                                                                                                                                  | `string \| undefined \| { _label: LabelWithExpertSlotPropType; } & { _tabIndex?: number \| undefined; _value?: Stringified<StencilUnknown>; _accessKey?: string \| undefined; _iconAlign?: AlignPropType \| undefined; _iconOnly?: boolean \| undefined; _role?: AlternativeButtonLinkRolePropType \| undefined; _ariaControls?: string \| undefined; _ariaCurrent?: AriaCurrentPropType \| undefined; _ariaExpanded?: boolean \| undefined; _ariaLabel?: string \| undefined; _ariaSelected?: boolean \| undefined; _on?: ButtonCallbacksPropType<StencilUnknown> \| undefined; _type?: ButtonTypePropType \| undefined; _variant?: ButtonVariantPropType \| undefined; _customClass?: string \| undefined; _disabled?: boolean \| undefined; _hideLabel?: boolean \| undefined; _icon?: IconPropType \| undefined; _id?: string \| undefined; _name?: string \| undefined; _syncValueBySelector?: string \| undefined; _tooltipAlign?: AlignPropType \| undefined; }` | `undefined` |

## Dependencies

### Used by

- [kol-version](../version)

### Depends on

- kol-button-wc
- kol-span-wc

### Graph

```mermaid
graph TD;
  kol-badge --> kol-button-wc
  kol-badge --> kol-span-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  kol-version --> kol-badge
  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px
```

---
