import { PoodlApp } from '@poodl/widget';
import Navbar from './components/Navbar';

export default function Swap() {
    return (
        <>
            <Navbar />
            <section className="bg-black lg:w-3/4 xl:w-2/3 mx-auto px-4 py-8 flex flex-col gap-8">
                
                <div className="text-center justify-center">
                    <PoodlApp

                        predefinedTokens={[
                            {
                                address: "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD",
                                chainId: 56,
                                decimals: 18,
                                hasTransactonFees: true,
                                logoURI: "https://www.limitlessnetwork.org/_next/static/media/Logo.3a89c1e7.png?imwidth=3840",
                                name: "Limitless Network",
                                symbol: "LNT"
                            }
                        ]}
                        defaultPinnedTokens={{
                            56: [
                                "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD",
                                "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                            ]
                        }}
                        defaultSelectedTokenByChains={{
                            56: {
                                defaultOutputToken: "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD"
                            }
                        }}
                    />
                </div>
            </section>
        </>
    );
}