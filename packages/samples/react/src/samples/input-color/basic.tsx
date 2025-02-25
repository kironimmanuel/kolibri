import React from 'react';
import { KolForm, KolInputColor } from '@public-ui/react';

import { FC } from 'react';

import { ERROR_MSG } from '../../shares/constants';

export const InputColorBasic: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputColor
			_id="farbe"
			_name="farbe"
			_value="#ff0000"
			_error={ERROR_MSG}
			_label="Farbe"
			_icon={{
				left: {
					icon: 'codicon codicon-arrow-left',
				},
				right: {
					icon: 'codicon codicon-arrow-right',
				},
			}}
		/>
		<KolInputColor _id="farb1" _label="Farbe" _list="['#000000','#ff0000', '#0000ff','#00ff00']" _error={ERROR_MSG} />
		<KolInputColor _id="farbe2" _hint="Hilfetext" _value="#ff0000" _label="Farbe (Disabled)" />
		<KolInputColor _disabled _id="farbe3" _value="#ff0000" _label="Farbe (Disabled)" />
	</KolForm>
);
