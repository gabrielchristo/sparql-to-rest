# SPARQL to REST

<details>
<summary> <b> Introdução </b> </summary>
<p>
Este projeto visa desenvolver uma prova de conceito (PoC) para exposição dos dados de um endpoint SPARQL por meio de um endpoint RESTful através do projeto [RAMOSE](https://github.com/opencitations/ramose).

O projeto RAMOSE permite o desenvolvimento ágil de APIs RESTful na linguagem Python através do framework [Flask](https://github.com/pallets/flask). O artigo base do projeto está disponível no [Semantic Web Journal](http://www.semantic-web-journal.net/content/creating-restful-apis-over-sparql-endpoints-using-ramose-0).

Para ilustrar a conversão, foi utilizado o seguinte endpoint SPARQL:

- Wikidata: https://query.wikidata.org/
</p>
</details>



<details>
<summary> <b> Instalação </b> </summary>
<p>

### Backend RAMOSE

Para executar o backend RAMOSE leia os detalhes de execução [aqui](). Com o backend iniciado deve ser possível acessar a API por:

```
http://localhost:5050/api/
```

### GUI

ToDo ...

</p>
</details>




<details>
<summary> <b> Consultas </b> </summary>
<p>
ToDo ...

```sparql
SELECT DISTINCT ?PersonLabel ?NPLabel (YEAR(?When) as ?year) ?Pic
WHERE {
  ?Person p:P166 ?NobelPrize .
  ?NobelPrize ps:P166/wdt:P279* wd:Q7191 ;
              ps:P166/rdfs:label ?NPLabel filter (lang(?NPLabel) = "en") .
  OPTIONAL {
    ?NobelPrize pq:P585 ?When .
    ?Person wdt:P18 ?Pic
  }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" .
  }
} ORDER BY ?year
```
</p>
</details>



<details>
<summary> <b> Comparativo com JSON-LD </b> </summary>
<p>
ToDo ...
</p>
</details>
