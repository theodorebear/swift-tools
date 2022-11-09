import { SwiftForm } from "./lib"
import SwiftTable from "./lib/components/tables/swift-table"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { SwiftGridRow, SwiftGridColumn } from "./lib/components/grid"

const AppStyled = styled.div`
	min-height: 100vh;
	padding: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	background: #fafafa;

	opacity: 1;

	#app-form {
		width: 100%;
		max-width: 820px;
	}
`

const SampleItem = styled.div`
	height: 42px;
	background: blue;
`

function App() {
	return (
		<AppStyled>
			<div id="app-form">
				{/*<Row spacing={[4, 4]} breakpoints={[576]}>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[12]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
					<Column widths={[4]}>
						<SampleItem />
					</Column>
				</Row>*/}

				{/*<SwiftTable
					columns={[{ title: "Other", name: "name", type: "bubbles" }]}
					data={[
						{
							name: {
								color: "orange",
								items: [
									{ name: "ACT" },
									{ plain: 1, name: "5***********4432" },
									{ name: "EXP" },
									{ plain: 1, name: "05/24" },
								],
							},
						},
					]}
					links={"/agent/agents/{id}"}
				/>*/}

				<SwiftForm
					onSubmit={() => {}}
					cols={8}
					fields={[
						{
							key: "name",
							type: "text",
							label: "Name",
							value: "",
							values: [
								{ name: "test", value: "test" },
								{ name: "test2", value: "test2" },
							],
							cols: 6,
						},
						{
							key: "mls_id_copy",
							type: "text",
							label: "Gated field...",
							value: null,
							gate: [{ field: "name", present: true }],
						},
						{
							key: "submit",
							type: "submit",
							label: "Create",
						},
					]}
				/>

				{/*<SwiftForm
					onSubmit={(vals) => console.log(vals)}
					theme={'default'}
					type="card"
					inline={true}
					fields={[
						{
							key: 'password',
							type: 'text',
							label: 'Card Number',
							flex: 1,
						},
						{
							key: 'password',
							type: 'text',
							label: 'Card Number',
						},
						{
							key: 'password',
							type: 'text',
							label: 'Card Number',
						},
						{
							key: 'password',
							type: 'text',
							label: 'Card Number',
						},

						{
							key: 'submit',
							type: 'submit',
							icon: 'next',
							flip: true,
							label: 'Submit',
						},
					]}
				/>*/}

				{/*<SwiftForm
					onSubmit={(values) => {
						console.log('values', values)
						//setDomain({ ...domain, otp_success: true })
					}}
					//inline={true}
					fields={[
						// {
						// 	type: 'otp',
						// 	key: 'individual_totp',
						// 	label: 'One-Time Password',
						// 	autoFocus: true,
						// 	validate: true,
						// 	autoSubmit: true,
						// 	flex: 1,
						// },
						// {
						// 	type: 'text',
						// 	key: 'name',
						// 	label: 'Name',
						// 	flex: 1,
						// },

						{
							key: 'test',
							type: 'text',
							label: 'Tooltip',
							value: '',
							tooltip: { name: 'hi', content: 'this is a test tooltip!', link: { text: 'See the Docs', path: '/docs?me' } },
						},

						{
							key: 'payment_instrument_type',
							type: 'tabs',
							label: 'Payment Instrument',
							value: 'card',
							values: [
								{ name: 'Credit Card', value: 'card' },
								{ name: 'ACH Transfer', value: 'ach' },
							],
						},
						{
							type: 'date',
							key: 'date',
							label: 'Date',
							flex: 1,
							gate: {
								field: 'payment_instrument_type',
								value: 'ach',
							},
						},
						{
							type: 'date',
							key: 'date',
							label: 'Date',
							flex: 1,
						},
						{
							type: 'time',
							key: 'time',
							label: 'Time',
							flex: 1,
						},
						{
							type: 'text',
							key: 'datetime',
							label: 'Address',
							format: 'address',
							flex: 1,
						},
						// {
						// 	key: 'amount',
						// 	type: 'text',
						// 	label: 'Amount',
						// 	value: '',
						// 	validate: true,
						// 	autoFocus: true,
						// 	cols: 6,
						// },
						// {
						// 	key: 'card_name',
						// 	type: 'text',
						// 	label: 'Full Name',
						// 	value: '',
						// 	validate: true,
						// 	//autoFocus: true,
						// 	cols: 6,
						// },
						// {
						// 	key: 'card_phone',
						// 	type: 'text',
						// 	label: 'Phone',
						// 	value: '',
						// 	validate: 'phone',
						// 	mask: 'phone',
						// 	cols: 6,
						// },
						// {
						// 	key: 'card_email',
						// 	type: 'text',
						// 	label: 'Email',
						// 	value: '',
						// 	validate: 'email',
						// 	cols: 6,
						// },

						// { type: 'subtitle', label: 'Payment Info' },

						// {
						// 	key: 'payment_instrument_type',
						// 	type: 'radio',
						// 	label: 'Payment Instrument',
						// 	value: 'card',
						// 	values: [
						// 		{ name: 'Credit Card', value: 'card' },
						// 		{ name: 'ACH Transfer', value: 'ach' },
						// 	],
						// },

						// {
						// 	key: 'card_number',
						// 	validate: 'card_number',
						// 	mask: 'card_number',
						// 	type: 'text',
						// 	label: 'Card Number',
						// 	placeholder: '____ ____ ____ ____',
						// 	value: '',
						// 	gate: { field: 'payment_instrument_type', value: 'card' },
						// 	cols: 6,
						// },

						// {
						// 	key: 'card_expiration',
						// 	type: 'text',
						// 	label: 'Expires',
						// 	mask: 'card_expiration',
						// 	validate: 'card_expiration',
						// 	placeholder: '__ / __',
						// 	value: '',
						// 	gate: { field: 'payment_instrument_type', value: 'card' },
						// 	cols: 3,
						// },
						// {
						// 	key: 'card_cvv',
						// 	type: 'text',
						// 	label: 'CVV',
						// 	mask: 'card_cvv',
						// 	validate: 'card_cvv',
						// 	placeholder: '___',
						// 	value: '',
						// 	gate: { field: 'payment_instrument_type', value: 'card' },
						// 	cols: 3,
						// },

						// {
						// 	key: 'ach_name',
						// 	type: 'text',
						// 	label: 'Name on Account',
						// 	placeholder: 'John Doe',
						// 	value: '',
						// 	validate: true,
						// 	gate: { field: 'payment_instrument_type', value: 'ach' },
						// 	cols: 6,
						// },
						// {
						// 	key: 'ach_type',
						// 	type: 'select',
						// 	label: 'Account Type',
						// 	placeholder: '',
						// 	emptyValue: false,
						// 	value: 'checking',
						// 	values: [
						// 		{ name: 'Checking Account', value: 'checking' },
						// 		{ name: 'Savings Account', value: 'savings' },
						// 	],
						// 	validate: true,
						// 	gate: { field: 'payment_instrument_type', value: 'ach' },
						// 	cols: 6,
						// },

						// {
						// 	key: 'ach_routing',
						// 	type: 'text',
						// 	label: 'Routing Number',
						// 	value: '',
						// 	mask: 'ach_routing',
						// 	placeholder: 'Routing #',
						// 	validate: 'ach_routing',
						// 	validate: true,
						// 	gate: { field: 'payment_instrument_type', value: 'ach' },
						// 	cols: 6,
						// },
						// {
						// 	key: 'ach_account',
						// 	type: 'text',
						// 	label: 'Account Number',
						// 	placeholder: 'Account #',
						// 	value: '',
						// 	validate: 'ach_account',
						// 	validate: true,
						// 	gate: { field: 'payment_instrument_type', value: 'ach' },
						// 	cols: 6,
						// },

						// { type: 'subtitle', label: 'Billing Address' },

						// {
						// 	key: 'card_billing_address',
						// 	type: 'text',
						// 	label: 'Address',
						// 	placeholder: '',
						// 	validate: true,
						// 	value: '',
						// 	cols: 6,
						// },

						// {
						// 	key: 'card_billing_zipcode',
						// 	type: 'text',
						// 	label: 'Zip Code',
						// 	mask: 'zip_code',
						// 	validate: 'zip_code',
						// 	placeholder: '_____',
						// 	validate: true,
						// 	value: '',
						// 	cols: 6,
						// },
						{ type: 'submit', key: 'submit', label: 'Submit', color: '#1b6191' },
					]}
				/>*/}
			</div>
		</AppStyled>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
