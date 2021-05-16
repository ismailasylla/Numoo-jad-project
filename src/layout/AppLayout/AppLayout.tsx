import React, { FC } from 'react';
import { Container, Content } from './AppLayout.styled';
import { TopNav, Footer } from '../../components';

interface Props {
    children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <TopNav />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    )
}

export default AppLayout;