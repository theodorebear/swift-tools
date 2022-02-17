import { SwiftForm } from './lib'
import SwiftTable from './lib/components/tables/swift-table'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const AppStyled = styled.div`
	min-height: 100vh;
	padding: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	background: #fafafa;
	#app-form {
		width: 100%;
		max-width: 820px;
		background: #fff;
		padding: 24px;
		border-radius: 6px;
		box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
	}
`

function App() {
	return (
		<AppStyled>
			<div id="app-form">
				<SwiftTable
					columns={[
						{ title: 'Name', name: 'name' },
						{ title: 'Phone', name: 'phone' },
						{ title: 'Email', name: 'email' },
						{ title: 'Interactions', name: 'client_event_interactions' },
						{ title: 'Last Login', name: 'date_last_login', type: 'date' },
						{ title: 'CRM', name: 'clients_link', type: 'icon' },
					]}
					data={[{ name: 'test' }]}
					links={'/agent/agents/{id}'}
				/>

				<SwiftForm
					onSubmit={(vals) => console.log(vals)}
					theme={'minimal'}
					type="card"
					inline={true}
					fields={[
						{
							key: 'card_number',
							type: 'text',
							label: 'Card Number',
							validate: 'card_number',
							mask: 'card_number',
							placeholder: '____ ____ ____ ____',
							value: '',
							flex: 2,
						},

						{
							key: 'card_expiration',
							type: 'text',
							label: 'Card Expiration',
							mask: 'card_expiration',
							validate: 'card_expiration',
							placeholder: '__ / __',
							value: '',
							flex: 1,
						},
						{
							key: 'card_cvv',
							type: 'text',
							label: 'CVV',
							mask: 'card_cvv',
							validate: 'card_cvv',
							placeholder: 'CVV',
							value: '',
							flex: 1,
						},

						{
							key: 'cc_zip',
							type: 'text',
							label: 'Zip Code',
							mask: 'zip_code',
							validate: 'zip_code',
							placeholder: 'Zip',
							value: '',
							flex: 1,
						},

						{
							key: 'submit',
							type: 'submit',
							icon: 'next',
							flip: true,
							label: 'Submit',
						},
					]}
				/>
			</div>
		</AppStyled>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
