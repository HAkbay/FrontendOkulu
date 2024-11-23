import PropTypes from 'prop-types'
import { useEffect } from 'react'

function ListItem({ word, value }) {
    useEffect(() => {
        console.log('ListItem rendered')
    }, [])
    return (
        <li>{word} {value}</li>
    )
}
ListItem.propTypes = {
    word: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default ListItem