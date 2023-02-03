import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { NavbarProps } from 'sanity';

function StudioNavbar(props: NavbarProps) {
	return (
		<div>
			<div className="p-5 flex items-center justify-between">
				<Link href="/" className="flex items-center text-[#F7AB0A]">
					<ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-[#F7AB0A]" />
					Go to Website
				</Link>
				<div className="p-5 hidden md:flex justify-center rounded-lg border-2 border-[#F7AB0A]">
					<h1 className="font-bold text-white">
						Want Coding challenges & Solutions sent to your inbox daily? 👉
					</h1>
					<Link href="/" className="ml-2 font-bold text-[#F7AB0A]">
						customowy_link
					</Link>
				</div>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
