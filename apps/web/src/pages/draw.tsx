import Top from '@/components/Navbar';
import WhiteBoard from '@/components/WhiteBoard';
import Properties from '@/components/Properties';

const Draw: React.FC = () => {

    return (
        <>

            <Top />
            <div className='flex' >
                <WhiteBoard />
                <Properties />
            </div>
            
        </>
    )
}

export default Draw;

