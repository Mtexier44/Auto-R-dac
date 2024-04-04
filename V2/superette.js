const template = "Nous étions en patrouille lorsque nous avons reçu une alerte concernant la superette ${lieu}. Nous nous sommes donc dirigés le plus rapidement possible vers celle-ci. Une fois arrivés sur les lieux, nous avons remarqué que ${braqueurs} individus masqué(s), organisé(s) et armé(s), parmi lesquels se trouvait ${individu}, étaient à l'intérieur de la banque avec ${otages} comprenant Apu le propriétaire de cette superette. Devant la superette il y avait un véhicule de type ${vehiculetype} de couleur ${vehiculecolor} immatriculé ${vehiculeplaque} appartenant à ${vehiculeproprietaire}. ${coursepoursuite} Nous avons vérifié ses papiers d'identités [PPA ${ppa} / Carte d'identité ${cartedidentitees} / Permisde conduire ${permisdeconduire}]. Nous avons donc procédé à l'interpellation de l'individu, puis nous l'avons conduit au poste de police de Vespucci. Nous lui avons énoncé ses droits, qu'il a compris. L'individu ${droits}. Par la suite, nous avons procédé à la fouille de l'individu et saisi les articles suivants : x ${nombredetel} téléphone [${numserietel}],x ${nombrederadio} radio, x ${nombrearme} ${typearme} [${numseriearme}], x ${nombrechargeur} ${typechargeur},  x ${nombredrogue} ${typedrogue}, x ${nombreargent} argent sale, ${autresaisie}. En conclusion, nous l'avons placé en garde à vue en l'attente de son jugement.	";

function onSubmit() {
  const lieu = document.getElementById("lieu").value;
  const braqueurs = document.getElementById("braqueurs").value;
  const individu = document.getElementById("individu").value;
  const otages = document.getElementById("otages").value;
  const vehiculetype = document.getElementById("vehiculetype").value;
  const vehiculecolor = document.getElementById("vehiculecolor").value;
  const vehiculeplaque = document.getElementById("vehiculeplaque").value;
  const vehiculeproprietaire = document.getElementById("vehiculeproprietaire").value;
  const nombredetel = document.getElementById("nombredetel").value;
  const numserietel = document.getElementById("numserietel").value;
  const nombrederadio = document.getElementById("nombrederadio").value;
  const nombrearme = document.getElementById("nombrearme").value;
  const typearme = document.getElementById("typearme").value;
  const numseriearme = document.getElementById("numseriearme").value;
  const nombrechargeur = document.getElementById("nombrechargeur").value;
  const typechargeur = document.getElementById("typechargeur").value;
  const nombredrogue = document.getElementById("nombredrogue").value;
  const typedrogue = document.getElementById("typedrogue").value;
  const nombreargent = document.getElementById("nombreargent").value;
  const autresaisie = document.getElementById("autresaisie").value;

  const coursepoursuite = document.querySelector('input[name="coursepoursuite"]:checked') ? "Nous sommes partis en course poursuite de leur véhicule immatriculé [...]. Pendant la course poursuite, l'individu a commis les infractions suivantes : non-respect des distances de sécurité (1,5 m), franchissement d'une ligne continue, non-respect envers un véhicule prioritaire, non-respect d'un feu rouge (stop & go), non-respect d'un stop, demi-tour non autorisé, circulation à contresens, dépassement dangereux, entrave à la circulation, dégradation de biens publics, trouble à l'ordre public, mise en danger de la vie d'autrui, refus d'obtempérer, délit de fuite et excès de vitesse supérieur à 30 km/h. À la suite de plusieurs sommations et accidents, l'individu s'est vu contraint de s'arrêter et de sortir du véhicule." : "";
  const ppa = document.querySelector('input[name="ppa"]:checked') ? "possédé" : "non-possédé";
  const cartedidentitees = document.querySelector('input[name="cartedidentitees"]:checked') ? "possédée" : "non-possédée";
  const permisdeconduire = document.querySelector('input[name="permisdeconduire"]:checked') ? "possédé" : "non-possédé";
  const droits = [...document.querySelectorAll('input[name="droits[]"]:checked')].map(e => e.value).join(', ');

  let text = template.replace("${lieu}", lieu);
  text = text.replace("${braqueurs}", braqueurs);
  text = text.replace("${individu}", individu);
  text = text.replace("${otages}", otages);
  text = text.replace("${vehiculetype}", vehiculetype);
  text = text.replace("${vehiculecolor}", vehiculecolor);
  text = text.replace("${vehiculeplaque}", vehiculeplaque);
  text = text.replace("${vehiculeproprietaire}", vehiculeproprietaire);
  text = text.replace("${coursepoursuite}", coursepoursuite);
  text = text.replace("${ppa}", ppa);
  text = text.replace("${cartedidentitees}", cartedidentitees);
  text = text.replace("${permisdeconduire}", permisdeconduire);
  text = text.replace("${droits}", droits);
  text = text.replace("${nombredetel}", nombredetel);
  text = text.replace("${numserietel}", numserietel);
  text = text.replace("${nombrederadio}", nombrederadio);
  text = text.replace("${nombrearme}", nombrearme);
  text = text.replace("${typearme}", typearme);
  text = text.replace("${numseriearme}", numseriearme);
  text = text.replace("${nombrechargeur}", nombrechargeur);
  text = text.replace("${typechargeur}", typechargeur);
  text = text.replace("${nombredrogue}", nombredrogue);
  text = text.replace("${typedrogue}", typedrogue);
  text = text.replace("${nombreargent}", nombreargent);
  text = text.replace("${autresaisie}", autresaisie);

  document.getElementById("result").innerHTML = text;
  return false;
}
