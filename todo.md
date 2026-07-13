
·
13 de jul. de 2026
O site apresenta o escritório de Bruna Schlos, uma arquiteta que estabeleceu sua prática em Porto Alegre após adquirir experiência no mercado carioca. A empresa foca primordialmente em arquitetura residencial e de interiores, buscando transformar espaços físicos em ambientes mais acolhedores e funcionais. Entre os serviços oferecidos, destacam-se a criação de projetos do zero, reformas completas e consultorias de decoração para mudanças pontuais. Com mais de 70 projetos realizados desde 2019, o escritório atende tanto demandas domésticas quanto comerciais com um olhar criativo. O conteúdo destaca o propósito da profissional de impactar positivamente a vida dos clientes através da otimização de espaços. Assim, a plataforma serve como um portfólio digital para exibir conquistas e atrair novos colaboradores.

Para recriar o site de Bruna Schlos Arquitetura Criativa utilizando o Astro Framework, você deve focar em uma estrutura que transmita profissionalismo, sofisticação e acolhimento. Com base nas informações contidas nas fontes, aqui está uma descrição completa para guiar sua criação:
1. Descrição do Conceito e Conteúdo
O site é um portfólio de um escritório fundado em 2019, especializado em arquitetura de interiores residencial, com foco em transformar ambientes em locais agradáveis e acolhedores
.
Seções principais que você deve implementar no Astro:
Hero/Home: Apresentação da arquiteta Bruna Schlos e do propósito do escritório
.
Sobre: Detalhes da trajetória da profissional (experiência no Rio de Janeiro e retorno a Porto Alegre) e métricas como "70+ projetos feitos" e "5 anos de mercado"
.
Serviços (O que fazemos):
Arquitetura: Projetos do zero, desde a escolha do terreno até a execução
.
Arquitetura de Interiores: Reformas ou imóveis novos para residências e comércios
.
Consultoria de Decoração: Mudanças pontuais, disposição de móveis, cores e iluminação
.
Projetos em Destaque: Galeria visual incluindo projetos como "Ap do Bê", "Ap da Mari" e "Suíte Cipriani"
.
Contato e Rodapé: Links para WhatsApp, e-mail, Instagram e o endereço físico em Porto Alegre (R. Felicíssimo de Azevedo, 400)
.
2. Sugestão de Identidade Visual (Cores e Fontes)
As fontes fornecidas não especificam códigos hexadecimais ou nomes de famílias tipográficas exatas. No entanto, o tom do escritório ("arquitetura criativa", "acolhedor", "agradável") sugere uma estética minimalista e elegante
. Para inspirar sua criação no Astro, aqui estão sugestões baseadas no "mood" do negócio:
Paleta de Cores (Sugestão):
Primária (Fundo): Tons de Off-White ou Cinza muito claro para manter o aspecto limpo e focar nas fotos dos projetos.
Acento (Destaque): Tons terrosos (como um Bege areia ou Terracota suave) ou um Cinza chumbo para transmitir sobriedade e sofisticação.
Texto: Preto suave ou grafite escuro para alta legibilidade.
Tipografia (Sugestão):
Títulos: Uma fonte Serif (serifada) elegante para passar autoridade e design clássico (ex: Playfair Display ou Lora).
Corpo de texto: Uma fonte Sans-Serif moderna e limpa para facilitar a leitura técnica (ex: Montserrat, Open Sans ou Inter).
3. Estrutura Técnica Sugerida para Astro
Como o Astro é excelente para performance, você pode estruturar o projeto da seguinte forma:
Layouts: Crie um MainLayout.astro que inclua o Header (com navegação para Home, Sobre, Projetos e Contato) e o Footer
.
Componentes:
ServiceCard.astro para listar os três pilares de atuação
.
ProjectGallery.astro para os destaques
.
Stats.astro para os números de projetos e anos de escritório
.
Content Collections: Use coleções de conteúdo do Astro para gerenciar os projetos individuais, facilitando a adição de novas obras no futuro através de arquivos Markdown ou MDX.
Para garantir a funcionalidade de conversão, não esqueça de incluir um botão flutuante de WhatsApp vinculado ao número (51) 99941-4246, conforme indicado nas fontes
.
