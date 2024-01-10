'use client'

import Card from '@/components/card'
import Container from '@/components/container'
import Form from '@/components/form/Form'

export default function Home() {
    const selected = 'home'
    return (
        <Container>
            <Card color={selected}>
                <Form />
            </Card>
        </Container>
    )
}
