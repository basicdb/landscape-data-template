// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'basic',
	Name: 'Basic.tech',
	Description: 'Infra for building personalized, multiplayer, local-first apps where users own their data',
	Website: 'https://basic.tech',
	Deployment: ['Self-hosted', 'Hosted'],
	License: 'MIT',
	MaturityLevel: 'Beta',
	UniquenessNote: 'Since data is synced to user-owned data stores, apps are interoperable by default. Apps can discover and reuse data schemas from other apps or use schema lenses to adapt to any app.',
	UserControlDataOwnership: 'Yes - every user is given a personal data store (PDS) that stores data from all apps, giving users full control over their data.',
	AppTarget: {
		LanguageSDK: { data: ['Typescript', 'JavaScript'] },
		FrameworkIntegrations: {
			data: ['Next.js', 'React Native', 'React']
		}
	},
	Networking: {
		Topology: { data: 'Client-Server' },
		Protocol: {
			data: ['WebSockets', 'HTTP'],
		}
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['PostgreSQL', 'SQLite'] },
		DataModelParadigm: { data: 'Relational' },
		SchemaManagement: { data: ['Schema definition', 'Validate schemas on write'] },
	},
	ClientSideData: {
		QueryAPI: { data: ['Async', 'Reactive queries'] },
		PersistenceMechanism: { data: ['IndexedDB'] },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: { data: 'Server reconciliation' },
		WhereResolutionOccurs: { data: 'Server' }
	},
	AuthIdentity: {
		Encryption: { data: 'Yes', comment: "Encrypted at rest - End to end encryption optional"},
		AuthenticationMethod: { data: ['JWT Tokens']},
		AuthorizationPermissions: { data: 'Custom' },
	},
	DevelopmentWorkflowsDX: {
		CLI: { data: 'Yes' }, 
		DebuggingTools: { data: ['Dashboard'] },
		TypeSupport: { data: 'Yes'}
	},
	UIRelated: { 
		Components: { data: ['React components for Auth']}
	}
})
