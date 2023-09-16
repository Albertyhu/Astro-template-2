import { atom } from 'nanostores'
import ProjectData from '@/demo/projects.json'

const categories = [...new Set(ProjectData.projects.map((project) => project.category))]
categories.unshift('all')

//stores recent blog posts
export const MobileMenuOpen = atom(false)

export const MessageArray = atom([])

export const SelectedCategory = atom('all')

export const AllCategories = atom(categories)

export const CarouselPosition = atom(0)

export const TestimonialSideDirection = atom('')
