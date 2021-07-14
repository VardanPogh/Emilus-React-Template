import React from 'react'
import Flex from 'components/shared-components/Flex'

const logData = [
	{
		version: '1.1.3',
		date: '12 Nov 2020',
		updateContent: [
			'[Fix] Transfer component css issue'
		]
	},
	{
		version: '1.1.2',
		date: '24 Oct 2020',
		updateContent: [
			'[Fix] Page rerender when side nav toggle clicked',
			'[Add] Delete & Rename Board to Scrumboard',
			'[Add] App prefix path as constant'
		]
	},
	{
		version: '1.1.1',
		date: '28 Sep 2020',
		updateContent: [
			'[Fix] Mobile menu not display in Safari'
		]
	},
	{
		version: '1.1.0',
		date: '11 Sep 2020',
		updateContent: [
			'[Restructure] Apps module code restructure'
		]
	},
	{
		version: '1.0.1',
		date: '5 Sep 2020',
		updateContent: [
			'[Fix] Minnor bug fix'
		]
	},
	{
		version: '1.0.0',
		date: '24 Aug 2020',
		updateContent: [
			'[Release] Initial Release'
		]
	}
]

const Log = props => {
	return (
		<div className={`py-4 ${props.border && 'border-bottom'}`}>
			<Flex alignItems="center">
				<h3 className="font-weight-normal mb-0 mr-3">{props.version}</h3>
				<code>{props.date}</code>
			</Flex>
			<div className="api-container p-0 border-0 mt-3">
				{props.children}
			</div>
		</div>
	)
}

const Changelog = () => {
	return (
		<div>
			<h2>Changelog</h2>
			{
				logData.map(elm => (
					<Log version={`v${elm.version}`} date={elm.date}>
						{
							elm.updateContent.length > 0 ? 
							<ul>
								{
									elm.updateContent.map(item => (
										<li>{item}</li>
									))
								}
							</ul>
							:
							null
						}
					</Log>
				))
			}
		</div>
	)
}

export default Changelog
