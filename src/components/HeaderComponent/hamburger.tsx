import { useRef } from 'react'
import { MobileMenuOpen } from '@/util/atomItems'
import { useStore } from '@nanostores/react'

const MobileMenu = () => {
	const $MobileMenuOpen = useStore(MobileMenuOpen)
	const MobileIconRef = useRef<HTMLDivElement | null>(null)

	const toggleMobileMenu = () => {
		if ($MobileMenuOpen) {
			MobileMenuOpen.set(false)
		} else {
			MobileMenuOpen.set(true)
		}
	}
	return (
		<div
			id="MobileIcon"
			className="hamburger bg-transparent"
			onClick={() => toggleMobileMenu()}
			ref={MobileIconRef}
		>
			<span className="line mb-[10px]"></span>
			<span className="line mb-[10px]"></span>
			<span className="line"></span>
		</div>
	)
}

export default MobileMenu
