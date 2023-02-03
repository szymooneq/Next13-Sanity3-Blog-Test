import Image from 'next/image';
import { LogoProps } from 'sanity';
import Logo from '../assets/logo.png';

function StudioLogo(props: LogoProps) {
	const { renderDefault, title } = props;

	return (
		<div className="flex items-center space-x-2">
			<Image
				className="rounded-full object-cover"
				width={50}
				height={50}
				src={Logo}
				alt="logo"
			/>
			{renderDefault && renderDefault(props)}
		</div>
	);
}

export default StudioLogo;
