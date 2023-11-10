import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const UrlForm: React.FC = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Defina a URL da API
        const apiURL = 'https://api-ojdjvu0vb-rodrigozan.vercel.app';
    
        try {
            const response = await axios.post(apiURL, { url: url });
    
            console.log('Resposta da API:', response.data);
    
            // Aqui você pode lidar com o retorno da API
            // Por exemplo, atualizar o estado ou exibir uma mensagem
    
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro na requisição:', error.response?.data || error.message);
            } else {
                console.error('Erro desconhecido:', error);
            }
        }
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#e7f6f2' }}>
            <form onSubmit={handleSubmit} className="text-center card p-5" style={{ width: '600px' }}>
                <h3 style={{ color: '#6a1b9a' }}>Zanurl</h3>
                <p>Inser the long URL</p>
                <div className="form-group">
                    <input
                        type="url"
                        className="form-control"
                        placeholder="Insert URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{ borderColor: '#6a1b9a' }}
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn" style={{ backgroundColor: '#00897b', color: 'white' }}>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default UrlForm;
