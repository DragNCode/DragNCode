import Top from '@/components/Navbar';
import WhiteBoard from '@/components/WhiteBoard';
import Properties from '@/components/Properties';
import SideBar from '@/components/SideBar';

const Draw: React.FC = () => {

    return (
        <>

            <Top />
            <div className='flex' >
                <SideBar />
                <WhiteBoard />
                <Properties />
            </div>
            
        </>
    )
}

export default Draw;

