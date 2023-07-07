'use client'
import styles from './page.module.css'

import { useState } from 'react'
import { Button } from 'antd';
//import { }
import { TimePicker } from 'antd';
import type { TimePickerProps} from 'antd/es/time-picker';

export default function Home() {
	const [date, setDate] = useState<TimePickerProps['value']>()
	const handleChange : TimePickerProps['onChange'] = (value) => {
		setDate(value);
	  };
	return (
		<main className={styles.main}>
			<Button>Stuff n stuff</Button>
			<TimePicker onChange={handleChange}/>
			<div style={{ marginTop: 16 }}>
				Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
			</div>
		</main>
	)
}
