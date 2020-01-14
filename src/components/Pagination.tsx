import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { colors, Flex } from '../theme'

interface PaginationProps {
  total: number
  baseUrl: string
}

const PaginationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-left: 2px;
`

const PaginationItem = styled.li`
  margin: 0 4px;
`

const PaginationLink = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  &.active {
    color: #fff;
    background-color: ${colors.primary};
  }
`

const Pagination: React.FC<PaginationProps> = ({ total, baseUrl }) => {
  const links: string[] = []
  for (let i = 1; i <= total; i++) {
    links.push(`${baseUrl}/${i}`)
  }
  return (
    <Flex style={{ alignItems: 'center' }}>
      Page:
      <PaginationList>
        {links.map((link, i) => (
          <PaginationItem key={i}>
            <PaginationLink activeClassName="active" to={link}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationList>
    </Flex>
  )
}

export default Pagination
