import React from 'react';
import './About.css';

export function About()
{
    return (
        <section className="about active section" id="About">
          <h1>Sobre</h1>
          <div className="container aboutContent">
            O sistema desenvolvido é um Gerenciador de Clientes para uma empresa de limpeza em residências.
            Ele permite cadastrar e visualizar clientes, filtrar clientes cadastrados, e otimizar rotas de atendimento para maximizar a eficiência na visitação dos clientes.
            O sistema calcula a melhor rota a partir da empresa até os clientes cadastrados, retornando à empresa no final, utilizando coordenadas X e Y para representar a localização dos clientes em um mapa bidimensional.
            O objetivo é facilitar o controle e a expansão da empresa, substituindo planilhas por uma plataforma centralizada.
          </div>
        </section>
    );
}