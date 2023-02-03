import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import StudioLogo from './components/StudioLogo';
import StudioNavbar from './components/StudioNavbar';
import { myTheme } from './sanityTheme';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNodeResolver } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: '/studio',
	name: 'SD_Content_Studio',
	title: 'SD Content Studio',
	projectId,
	dataset,
	plugins: [
		deskTool({
			defaultDocumentNode: getDefaultDocumentNodeResolver
		}),
		visionTool()
	],
	schema: {
		types: schemaTypes
	},
	studio: {
		components: {
			logo: StudioLogo,
			navbar: StudioNavbar
		}
	},
	theme: myTheme
});
