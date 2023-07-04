import Navbar from "./Navbar";

const Container = () => {

    const menuItems = [
        {
            Text:'Verstappen',
            link: '/Verstappen',
        },
        {
            Text:'Checo',
            link:'/Checo',
        },
        {
            Text:'Fanwear',
            link:'/Fanwear',
        },
        {
            Text:'Headwear',
            link:'/Headwear',
        },
        {
            Text:'Purchase',
            link:'/Purchase',
        },
    ];
    
    return(<>
    <Navbar menuItems={menuItems} />
    </>);
}

export default Container;