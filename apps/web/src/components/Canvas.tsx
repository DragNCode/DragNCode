import { Box } from "@chakra-ui/react"

export const Canvas: React.FC = () => {

    const elements = ['Button', 'Input', 'Card']

    return (
        <Box>
            <Box className="bg-slate-400 rounded-lg" width={1000} height={700} mt={16} ml={8} >
                {
                    elements.map(item => (
                        <p>{item}</p>
                    )) 
                }
            </Box>
        </Box>
    )
}