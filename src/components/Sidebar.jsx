import { useEffect, useState } from 'react'
import '../styles/_sidebar.scss'
import {sidebarSections} from "../const/sidebarSections.js";


const Sidebar = () => {
    const [activeId, setActiveId] = useState(null)
    const [expandedCategory, setExpandedCategory] = useState('css') // default

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const matched = sidebarSections.find(sec =>
                            sec.children.some(child => child.id === entry.target.id)
                        )
                        if (matched) {
                            setExpandedCategory(matched.id)
                            setActiveId(entry.target.id)
                        }
                    }
                })
            },
            { rootMargin: '-50% 0px -50% 0px' }
        )

        sidebarSections.forEach(section =>
            section.children.forEach(child => {
                const el = document.getElementById(child.id)
                if (el) observer.observe(el)
            })
        )

        return () => observer.disconnect()
    }, [])

    return (
        <aside className="sidebar">
            {sidebarSections.map(sec => (
                <div className="sidebar-group" key={sec.id}>
                    <button
                        className={`sidebar-category ${
                            expandedCategory === sec.id ? 'expanded' : ''
                        }`}
                        onClick={() =>
                            setExpandedCategory(prev => (prev === sec.id ? null : sec.id))
                        }
                    >
                        {sec.category}
                    </button>
                    {expandedCategory === sec.id && (
                        <ul className="sidebar-subitems">
                            {sec.children.map(child => (
                                <li key={child.id}>
                                    <a
                                        href={`#${child.id}`}
                                        className={activeId === child.id ? 'active' : ''}
                                    >
                                        {child.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar
