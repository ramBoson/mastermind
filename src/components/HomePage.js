import React from 'react';
import Layout from './Layout';
import Banner from './Sections/Banner';
import Introduction from './Sections/Introduction';
import InvestmentType from './Sections/InvestmentType';


function HomePage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Banner />
            <Introduction />
            <InvestmentType />
        </Layout>
    );
}

export default HomePage;