import React from 'react'
import { useNavigate } from 'react-router-dom';

function zaSlike() {

    const [slike, postaviSlike] = useState([]);
    useEffect(() => {
        const storageReferenca = projectStorage.ref();

        storageReferenca.listAll().then((storageRef) => {
            const datoteka = storageRef.prefixes.map((datotekaRef) => {
                const imeDatoteke = datotekaRef.name;

                return datotekaRef.listAll().then((slika) => {
                    const slikaPromise = slika.items.map((slikaRef) =>
                        slikaRef.getDownloadURL()
                    );

                    return Promise.all(slikaPromise).then((slikaURL) => ({
                        imeDatoteke,
                        slikaURL,
                    }));
                });
            });

            Promise.all(datoteka).then((slikaPodaci) => {
                postaviSlike(slikaPodaci);
            });
        });
    }, []);


    const [odabranaSlika, postaviOdabranuSliku] = useState(null);
    const otvorenModal = (slikaUrl) => {
        postaviOdabranuSliku(slikaUrl);
      };
    
      const zatvorenModal = () => {
        postaviOdabranuSliku(null);
      };
    
      const upravljajModalKlikom = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
          zatvorenModal();
        }
      };
    
      const upravljajSlikaKlikom = (e) => {
        e.stopPropagation();
      };




      useEffect(() => {
        const datum = new Date('2023-06-26');
        const interval = setInterval(() => {
          const danasnjiDatum = new Date().getTime();
          const razlika = datum - danasnjiDatum;
    
          const dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
          const sati = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minute = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
          const sekunde = Math.floor((razlika % (1000 * 60)) / 1000);
    
          setCountdown({ dani, sati, minute, sekunde });
    
          if (razlika < 0) {
            clearInterval(interval);
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);



    return (

        <div className="container-fluid gallery-container">
            {slike.map((slika) => (
                <div className="row justify-content-around">
                    <h1 className="album-title text-center" data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
                        {slika.slikaName}
                    </h1>
                    {slika.imageUrls.map((url, indeks) => (
                        <div
                            className="col-4 img-column"
                            data-aos="fade-right"
                            data-aos-delay={indeks * 100}
                            data-aos-offset="200" data-aos-once="true"
                            onClick={() => otvorenModal(url)}
                        >
                            <img className="img-fluid" src={url} alt="Firebase Storage" />
                        </div>
                    ))}
                </div>
            ))}
            {odabranaSlika && (
                <div className="modal-overlay" onClick={upravljajModalKlikom}>
                    <div className="modal-content" data-aos="fade" onClick={zatvorenModal}>
                        <img
                            className="modal-image"
                            src={odabranaSlika}
                            alt="Modal"
                            onClick={upravljajSlikaKlikom}
                        />
                    </div>
                </div>
            )}
        </div>

    )
}

export default zaSlike
