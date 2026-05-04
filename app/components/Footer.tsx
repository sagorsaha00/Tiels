export default function Footer() {
    return (
        <footer className="min-h-[70vh] bg-[#3a3938] px-6 py-14 text-[#FFFAF6] md:px-12 lg:px-20">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between gap-20">
                <div className="flex flex-col justify-between gap-10 lg:flex-row">
                    <h2 className="text-[46px] lg:text-[72px] font-light leading-[0.95]">
                        hello Dear
                        <br />
                        mrartimas4@gmail.com
                    </h2>

                    <div className="grid h-28 rounded-2xl w-28 place-items-center bg-[#FFFAF6] text-[#3a3938] md:h-32 md:w-32">
                        <h3>
                            Thanks
                        </h3>
                    </div>
                </div>

                <div className="grid gap-12 text-sm uppercase lg:grid-cols-[1fr_1fr_1fr]">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-xl">CONTACT US</h1>
                        <a href="https://www.facebook.com/sagor.saha.55/" className="transition hover:opacity-60">
                            Facebook
                        </a>

                    </div>

                    <div className="space-y-10 normal-case">
                        <div>
                            <p className="mb-3 uppercase">Main Location</p>
                            <p className="max-w-xs text-[#FFFAF6]/80">
                                Cumilla, Daudkandi
                                <br />
                                Gouripur Bajar
                            </p>
                        </div>

                        <div>
                            <p className="mb-3 uppercase">Sales Office</p>
                            <p className="max-w-xs text-[#FFFAF6]/80">
                                Cumilla, Daudkandi
                                <br />
                                Gouripur Bajar
                            </p>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col justify-between gap-4 text-sm text-[#FFFAF6]/35 md:flex-row">
                    <p>Terms&Conditions</p>
                    <p>Trusted for over 20 years in premium tile solutions.</p>
                </div>
            </div>
        </footer>
    );
}