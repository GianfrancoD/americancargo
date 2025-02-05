import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logotipoFooter from "../../assets/logoZOOM3.jpeg";
import { useState } from "react";
import { TermsModal } from "../modals/modalsFooters";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Viewes = () => {
    window.open("/terminos2.pdf", "_blank");
  };
  return (
    <footer
      className="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-16"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 max-[768px]:place-content-center max-[768px]:place-items-center">
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center">
            <img
              src={logotipoFooter}
              alt="Suramérica Cargo"
              className="h-[15vh] max-[768px]:h-[10vh] w-auto max-[768px]:w-[50vw] bg-white rounded-xl"
            />
            <p className="text-blue-200 max-[768px]:text-center">
              Conectando negocios globalmente con soluciones logísticas
              innovadoras.
            </p>
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Aéreo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Marítimo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Terrestre
                </a>
              </li>
            </ul>
            <TermsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <>
                <h1>
                  <b>
                    Términos y Condiciones del Servicio de SUR AMERICA
                    IMPO-CARGO E.I.R.L y sus operadores logísticos
                    internacionales
                  </b>
                </h1>
                <p>
                  LAS NORMAS RELATIVAS A LA RESPONSABILIDAD ESTABLECIDAS POR EL
                  CONVENIO DE VARSOVIA Y CUALESQUIERA REFORMAS AL MISMO SERÁN DE
                  APLICACIÓN AL TRANSPORTE INTERNACIONAL DE CUALQUIER ENVÍO CON
                  ARREGLO AL PRESENTE EN TANTO Y EN CUANTO EL MISMO SE HALLE
                  REGIDO POR DICHAS NORMAS.
                </p>
                <p>
                  Sur América Impo-Cargo E.I.R.L., que para efectos de los
                  presentes Términos y Condiciones significará la compañía
                  operativa de sus operadores logísticos internacionales en el
                  país de partida ("SUR AMERICA CARGO"), se dedica al transporte
                  internacional de pequeños paquetes (incluyendo "envíos
                  expresos"), y a la prestación de servicios relacionados con o
                  adicionales a los anteriormente mencionados. (el
                  "transportista") el transporte internacional de paquetes
                  mediante los servicios que ofrece Sur América Cargo y sus
                  operadores logísticos internacionales. El conjunto de paquetes
                  cubiertos por una sola Guía de Embarque será considerado como
                  un solo envío.
                </p>
                <p>
                  Todos los envíos se hayan sujetos a los términos y condiciones
                  incluidos en la Tarifa y Servicios de Sur América Cargo,
                  publicada y/o pactada a través de la plataforma del sitio web:
                  www.suramericacargo.com la cual también está disponible en
                  otros medios electrónicos y oficinas de Sur América Cargo,
                  documento base de Sur América Cargo correspondiente a cada
                  envío, y a las disposiciones previstas en la ley aplicable de
                  la jurisdicción en la cual el embarque haya tenido origen. Si
                  el transporte aéreo implica un destino final o una parada en
                  un país que no sea el de partida, podrá ser regulado por el
                  Convenio de Varsovia. Las normas relativas a responsabilidad
                  establecidas por el Convenio para la Unificación de Ciertas
                  Reglas Relativas al Transporte Internacional Aéreo (Convention
                  for the Unification of Certain Rules Relating to International
                  Carriage by Air) firmado el 12 de octubre de 1929 en Varsovia,
                  Polonia, o cualesquiera modificaciones al mismo serán de
                  aplicación al transporte internacional de cualquier envío en
                  tanto y en cuanto el mismo se halle regido por dichas normas.
                </p>
                <p>
                  No se prevén paradas al momento en que se confía el envío, y
                  Sur América Cargo se reserva el derecho de encauzar el envío
                  en la forma que considere apropiada. No obstante, cualquier
                  disposición en contrario, el transporte internacional por
                  carretera podrá regirse por los términos y condiciones del
                  Convenio sobre el Contrato para el Transporte Internacional de
                  Mercancías por Carretera (Convention on the Contract for the
                  International Carriage of Goods by Road) firmado en Ginebra el
                  19 de mayo de 1956 y cualesquiera de sus reformas ("el
                  Convenio CMR").
                </p>
                <p>
                  Sur América Cargo podrá contratar subcontratistas para prestar
                  servicios y cumplir con contratos, ya sea en su nombre y
                  representación y en el de sus empleados, agentes y
                  subcontratistas, cada uno de los cuales se beneficiarán de
                  estos Términos y Condiciones. Ninguna de las partes
                  mencionadas podrá dispensar el cumplimiento con los presentes
                  términos y condiciones ni tampoco podrá modificar los mismos.
                </p>
                <p>
                  Todos los paquetes incluidos en una sola Guía Aérea del
                  operador y/o Sur América Cargo nota de entrega de Sur América
                  Cargo (la "Guía de Servicio") se considerarán un único envío.
                  Un envío podrá ser transportado a través de cualesquiera
                  paradas intermedias que Sur América Cargo y/o su operador
                  logístico internacional considere apropiadas. A menos que se
                  acuerde lo contrario por escrito antes de que el envío sea
                  confiado a Sur América Cargo, el servicio a ser provisto por
                  Sur América Cargo está limitado a recoger el envío,
                  transportarlo, realizar el despacho de aduana cuando
                  corresponda, y entregar el envío. El remitente acepta que los
                  envíos serán agrupados con envíos correspondientes a otras
                  empresas a los fines de su transporte y que Sur América Cargo
                  no puede supervisar el movimiento de entrada y salida de
                  embarques individuales en todos los centros de distribución.
                </p>

                <p>
                  <b>Mercancías Manejadas y Restricciones del Servicio</b>
                </p>

                <p>
                  <p>
                    Sur América Cargo ofrece el transporte de mercancías en
                    general, según se las define habitualmente, de conformidad
                    con las siguientes restricciones:
                  </p>
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    No se prestará servicio de transporte de paquetes o
                    artículos cuyo valor exceda los US$50,000 (o su equivalente
                    en moneda local). No se transportarán paquetes que contengan
                    joyas (excluidas las joyas de fantasía) de un valor que
                    supere los US$500 (o su equivalente en moneda local). Para
                    los servicios de Sur América Cargo no se transportarán
                    envíos que tengan un valor más de US$100,000 por pallet.
                  </li>
                  <li>
                    No se transportarán paquetes o artículos cuyo peso neto
                    exceda los 70 kilogramos (o 150 libras), cuya longitud
                    supere los 270 centímetros (o 108 pulgadas) o cuya longitud
                    y circunferencia combinados excedan los 330 centímetros (o
                    130 pulgadas) en total.
                  </li>
                  <li>
                    Los pallets que excedan las restricciones de medida y el
                    peso para el servicio de Sur América Cargo Worldwide Express
                    Freight (las cuales varían según origen y destino) serán
                    tratados según los máximos establecidos. Si se encuentran en
                    el sistema de Sur América Cargo estos pallets estarán
                    sujetos a un recargo por manejo de Pallets de Gran Tamaño
                  </li>
                  <li>
                    No se transportarán paquetes que contengan cualesquiera
                    artículos prohibidos detallados en el sitio Web de Sur
                    América Cargo (www.suramericacargo.com) incluyendo, sin
                    carácter taxativo, artículos de valor excepcional (como
                    monedas, billetes, estampillas de correo, instrumentos
                    negociables (salvo cheques), órdenes de dinero, piedras
                    preciosas sin engarzar, diamantes de tipo industrial) y
                    mercancías peligrosas. Remítase a la zona de mercancía
                    restringida y prohibida de Sur América Cargo para mayor
                    información sobre mercancías peligrosas. Con arreglo a la
                    ley aplicable, algunos artículos sólo pueden ser
                    transportados en virtud de condiciones preestablecidas y
                    algunos de ellos no pueden ser transportados por vía aérea.
                  </li>
                  <li>
                    Sur América Cargo no suministra regularmente servicios en
                    relación con paquetes que contengan animales vivos. Sur
                    América Cargo aceptará transportar animales vivos sólo a
                    título excepcional. El transporte de paquetes que contengan
                    animales vivos es limitado, debe ser acordado previamente y,
                    como ocurre con los demás paquetes, sólo será prestado el
                    servicio de acuerdo con los términos y condiciones previstos
                    en la Guía de Tarifas y Servicios de Sur América Cargo.
                  </li>
                  <li>
                    Los remitentes tienen prohibido de enviar y Sur América
                    Cargo no aceptará para transportación envíos que contengan
                    artículos que Sur América Cargo y sus operadores
                    internacionales no esté autorizado a aceptar o que Sur
                    América Cargo indique en los términos que no aceptará,
                    incluyendo los envíos que le sean presentados para
                    transportación en el Centros de Atención al Cliente de Sur
                    América Cargo, o en cualquier distribuidor tercero.
                  </li>
                  <li>
                    Sur América Cargo no suministra servicios de protección para
                    el transporte de mercancías perecederas o que requieran
                    protección del calor o del frío. Sólo será aceptado el
                    transporte de dichas mercancías a riesgo del remitente
                    respecto de cualquier daño ocasionado durante el transporte.
                  </li>
                  <li>
                    No se transportará ninguna mercancía prohibida por cualquier
                    regulación o ley aplicable en el país de origen o destino, o
                    que Sur América Cargo determine que es prohibida, a su sola
                    discreción. El remitente será responsable porque los datos
                    incluidos en la Guía de Servicio sean precisos y correctos y
                    de asegurarse de que todos los paquetes incluyan detalles de
                    contacto adecuados relativos al remitente y destinatario y
                    que los mismos estén correctamente empaquetados,
                    identificados y rotulados, que sus contenidos estén
                    descriptos y clasificados con precisión y acompañados por la
                    documentación que (en cada caso) sea necesaria a fin de que
                    sean aptos para su transporte y que cumplan con los
                    requisitos de la Guía de Tarifas y Servicios de Sur América
                    Cargo y/o sus operadores logísticos internacionales que sea
                    vigente y la ley aplicable.
                  </li>
                  <li>
                    Sur América Cargo se reserva el derecho, pero no es
                    requerido, a devolver al remitente cualquier envío que
                    contenga un artículo prohibido. Si se efectuara el retorno
                    de dicho envío, este se haría al solo riesgo y costo del
                    remitente.
                  </li>
                </ul>

                <p>
                  <b>Productos Perecederos</b>
                </p>
                <p>
                  Sur América Cargo no proporciona un servicio de protección
                  para el transporte de Productos Perecederos. Tales productos
                  son aceptados para el servicio de transporte únicamente bajo
                  el riesgo del remitente por cualquier daño que surja de la
                  naturaleza perecedera del artículo
                </p>

                <p>
                  transportado. Los remitentes no interpondrán reclamos por, y
                  Sur América Cargo y/o sus operadores logísticos
                  internacionales no serán responsable ante los remitentes ni
                  ningún tercero por, cualesquiera daños y perjuicios que puedan
                  surgir del transporte de Productos Perecederos,
                  independientemente de que el embarque sea entregado de acuerdo
                  a alguna garantía de servicio de Sur América Cargo que sea
                  aplicable o sea retrasado en tránsito. Sur América Cargo se
                  reserva el derecho de disponer, a su exclusiva discreción, de
                  cualquier envío en el Sistema de Sur América Cargo y/o sus
                  operadores logístico internacional que contenga un Producto
                  Perecedero que Sur América Cargo considere sin valor, inseguro
                  o antihigiénico.
                </p>

                <p className="font-medium">Valores Máximos</p>

                <p>
                  Sur América Cargo no acepta dar servicios para paquetes según
                  se establece a continuación:
                </p>

                <p>
                  -Cualquier paquete con valor real mayor a $50,000 Dólares
                  Americanos.
                </p>
                <p>
                  -Paquetes con un valor mayor de $5,000 enviados como resultado
                  de una solicitud de servicio hecho a través de Internet.
                </p>
                <p>
                  -Envíos internacionales que sean de un valor mayor a $2,000
                  por paquete o por pallet y que sean retornados vía Sur América
                  Cargo y/o su operador logístico internacional. envíos que se
                  retornen vía web a menos que el remitente o la persona que
                  haya entregado el paquete para servicio obtenga un resumen de
                  envío de Alto Valor, y esté firmado por el receptor al momento
                  de la recepción del envío.
                </p>
                <p>
                  -Paquetes con un valor de $2,000 o más, enviados a través de
                  un Tercero subcontratado o facturados usando Bill My Account;
                </p>
                <p>
                  -Paquetes con un valor de más de $2000 enviados vía Sur
                  América Cargo Drop Box;
                </p>
                <p>-Cartas prepagadas con un valor de más de $200;</p>
                <p>
                  -Paquetes con un valor de más de $999 cuando se haya
                  seleccionado Shipper Release;
                </p>
                <p>
                  -Paquetes con una cantidad de C.O.D. en exceso de $500
                  enviados vía Sur América Cargo Drop Box;
                </p>
                <p>
                  -Envíos internacionales que contengan joyas (no incluyendo
                  joyería personalizada) que tengan un valor de más de $500 por
                  paquete o por pallet;
                </p>
                <p>
                  -Envíos de servicio Sur América Cargo Worldwide Express
                  Freight con un valor de más de $100,000 por paquete o pallet;
                </p>

                <p>
                  <b>Intentos de Entrega Hasta Dos Veces Sin Cargos Extra</b>
                </p>

                <p>
                  Cuando resulte aplicable, si Sur América Cargo y/o su operador
                  logístico internacional no puede completar la entrega de un
                  envío, se dejará una notificación en el domicilio del
                  destinatario o bien por medios electrónicos especificando que
                  se ha intentado realizar una entrega. A partir de ese momento,
                  se realizará un segundo intento de entrega de los paquetes.
                </p>
                <p>
                  Para los envíos Sur América Cargo Worldwide Express Freight,
                  se hará un solo intento de entrega, subsecuentemente los
                  intentos de entrega están sujetos a cargos adicionales que
                  serán cargados al consignatario. Sur América Cargo y/o su
                  operador logístico internacional podrá entregar un envío a su
                  destinatario o a quien aparente ser mandatario o representante
                  de aquél, en el domicilio o lugar especificado en el sistema
                  de envíos de Sur América Cargo, a cualquier persona que esté
                  presente en el domicilio o lugar especificado en el sistema de
                  envíos de Sur América Cargo, o a un domicilio o lugar
                  alternativo que resulte razonable, de acuerdo con los usos o
                  costumbres comerciales, conforme a los procedimientos de
                  entrega de los conductores de Sur América Cargo y/o sus
                  operadores logísticos internacionales.
                </p>
                <p>
                  Sur América Cargo no limita la posibilidad de entrega de un
                  paquete o envío a una persona especificada como destinataria.
                </p>
                <p>
                  Sur América Cargo y/o su operador logístico internacional
                  puede usar un dispositivo electrónico a fin de obtener
                  constancia de entrega y el remitente acepta que no objetará
                  que Sur América Cargo tome como auténtica una versión impresa
                  de tal constancia por el mero hecho de que ésta hubiere sido
                  obtenida y almacenada en forma electrónica.
                </p>

                <p>
                  <b>Retención para Recogida y Espera de Servicios</b>
                </p>

                <p>
                  Al momento en que el remitente entrega el envío a Sur América
                  Cargo y/o su operador logístico internacional, el remitente
                  puede requerir que Sur América Cargo retenga un paquete
                  doméstico en el Centro de Servicios al Clientes para su
                  recogida por el consignatario. Para este envío, el remitente
                  solicitara y una etiqueta de dirección mostrando las palabras
                  “hold for pickup”, el nombre del consignatario, el número de
                  teléfono, el nombre de la persona de contacto, y la dirección
                  completa del Centro de Clientes.
                </p>
                <p>
                  Adicionalmente, el remitente aplicará una etiqueta de “hold
                  for pickup” debajo de la etiqueta de dirección en el envío.
                  “hold for pickup” no está disponible para envío de paquetes
                  internacionales. Para los envíos de Sur América Cargo
                  Worldwide Express Freight, el remitente puede solicitar a Sur
                  América Cargo que retenga un envío Sur América Cargo Worldwide
                  Express Freight para su recogida por el consignatario. Por
                  cada uno de estos envíos, el remitente deberá completar la
                  etiqueta de dirección que muestre las palabras “hold for
                  Pickup”, el nombre del consignatario, el número de teléfono,
                  el nombre de la persona de contacto, y la dirección completa
                  del consignatario.
                </p>
                <p>
                  Sur América Cargo retendrá el envío en el “Customer Center” o
                  en el “Sur América Cargo Worldwide Express Freight Center y/o
                  Warehouse” e intentará contactar al consignatario al teléfono
                  que se muestre en la etiqueta. Los envíos que no sean
                  recogidos dentro de los cinco (5) días laborables después de
                  la fecha de arribo serán considerados imposibles de entregar.
                </p>

                <p>
                  <b>
                    Tratamiento Especial de Paquetes Que No Puedan Ser
                    Entregados
                  </b>
                </p>
                <p>
                  Los envíos que hubiesen sido rechazados por el destinatario, o
                  que por cualquier otra razón no puedan ser entregados serán
                  retenidos, y Sur América Cargo intentará ponerse en contacto
                  con el remitente para obtener instrucciones al respecto. El
                  remitente será responsable por el pago de todos los cargos
                  incluyendo, sin carácter taxativo, el envío, disposición de
                  éste, o costos por el transporte de regreso, así como
                  cualquier arancel e impuesto, de corresponder.
                </p>

                <p>
                  <b>Rechazo y Suspensión de la Prestación de Servicios</b>
                </p>

                <p>
                  Si llega a conocimiento de Sur América Cargo y/o su operador
                  logístico internacional que cualquier envío no cumple con las
                  restricciones o condiciones antes expuestas, Sur América
                  Cargo, a su sola discreción, podrá rehusarse a transportar el
                  paquete en cuestión (o cualquier envío del cual dicho paquete
                  forme parte) y, si el envío se encuentra en trámite, Sur
                  América Cargo podrá suspender el transporte y retener el
                  envío.
                </p>
                <p>
                  Sur América Cargo se reserva asimismo el derecho de rehusar
                  prestar servicios, entre otros motivos, en razón de que un
                  paquete, debido a la naturaleza peligrosa o de otro tipo de
                  sus contenidos pueda, a exclusiva discreción de Sur América
                  Cargo VIOS y/o su operador logístico, ensuciar, manchar o de
                  otra forma dañar otros paquetes o los equipos, o el cual ha
                  sido embalado o envuelto inadecuadamente o con poca seguridad.
                  Sur América Cargo y/o su operador logístico internacional
                  también se reserva el derecho de, ya sea rehusar prestar
                  servicios en relación con cualquier paquete, o desde o hacia
                  cualquier lugar, o de suministrar servicios especiales en
                  aquellos casos en que, entre otras razones Sur América Cargo
                  y/o su operador logístico internacional a su sola discreción
                  considere que es poco seguro o económica u operativamente
                  imposible prestar el servicio. Sur América Cargo podrá, a su
                  sola discreción, suspender el transporte de cualquier paquete
                  o envío si considera que las mercancías no son aceptables para
                  su transporte por cualquier razón que fuere, si Sur América
                  Cargo y/o su operador logístico internacional no puede
                  realizar la entrega al segundo intento, si el destinatario
                  rehúsa aceptar la entrega, o si no puede cobrar montos
                  adeudados por el destinatario al momento de la entrega. El
                  remitente será responsable por el pago de todos los cargos –
                  calculados de acuerdo con las tarifas pactadas de Sur América
                  Cargo que en ese momento resulten aplicables - que se hubieren
                  originado en dicha suspensión de transporte incluyendo, sin
                  carácter taxativo, el envío, disposición de éste, o costos por
                  el transporte de regreso, así como cualquier arancel o
                  impuesto, de corresponder. El remitente será responsable por
                  los costos y gastos razonables en que incurra Sur América
                  Cargo y/o su operador logístico internacional (incluyendo el
                  almacenamiento) en razón de dichas pérdidas, impuestos y
                  aranceles aduaneros que Sur América Cargo deba soportar y por
                  todos los reclamos realizados contra Sur América Cargo debido
                  a que un paquete no cumple con las restricciones o condiciones
                  establecidas en el apartado “Mercancías Manejadas y
                  Restricciones del Servicio” que figura más arriba, o debido a
                  un rechazo o suspensión de transporte o retorno de un paquete
                  o envío por parte de Sur América Cargo de acuerdo con los
                  presentes Términos y Condiciones.
                </p>
                <p>
                  Sur América Cargo no será imputable o responsable por la
                  pérdida o daño de cualquier paquete, cuyos contenidos Sur
                  América Cargo y/o su operador logístico internacional no esté
                  autorizada aceptar, que Sur América Cargo manifieste que no va
                  aceptar, o que Sur América Cargo tenga derecho a rechazar. Si
                  Sur América Cargo suspende el servicio según se especifica en
                  los presentes Términos y Condiciones, quien abone los costos
                  de transporte no tendrá derecho a reembolso. La aceptación
                  para transportar cualquier paquete o envío que Sur América
                  Cargo y/o su operador logístico internacional no acepte
                  transportar o cuyo despacho se encuentre prohibido a los
                  remitentes, no implicará una dispensa de ninguna disposición
                  de los presentes Términos y Condiciones o de los Términos y
                  Condiciones establecidos en la Guía de Tarifas y Servicios, o
                  los que se encuentren publicados en la plataforma de servicios
                  de Sur América Cargo en su página web: www.SurAméricaCargo.com
                </p>

                <p>
                  <b>Embalaje</b>
                </p>

                <p>
                  Es responsabilidad del remitente garantizar el embalaje
                  adecuado de los envíos y que el contenido de los mismos esté
                  adecuadamente asegurado y empaquetado, envuelto, y acolchado
                  para su transportación. Los envíos deben ser embalados o
                  envueltos como para cumplir con las normas notificadas de Sur
                  América Cargo de acuerdo a los estándares establecidos en la
                  Guía de Servicios, o en www.SurAméricaCargo.com, y como para
                  superar las pruebas establecidas en la Asociación
                  Internacional de Seguridad de Tránsito [International Safe
                  Transit Association ("ISTA") 3A PROCEDIMIENTO (1 y 1A)],
                  procedimiento para probar productos embalados, publicado por
                  ISTA. Adicionalmente, cualquier producto sometido a prueba
                  deberá estar libre de daño y el embalaje deberá tener la
                  protección razonable fijada por Sur América Cargo y/o su
                  operador logístico internacional a su exclusivo criterio.
                </p>
                <p>
                  Los envíos que contengan mercancías de alto valor o alto
                  riesgo incluyendo, pero no limitándose a joyería, productos
                  farmacéuticos, ordenadores, dispositivos portátiles
                  electrónicos, teléfonos móviles y los componentes electrónicos
                  de los mismos, no deberán tener etiquetas, etiquetas de envío
                  personalizadas incluyendo los creados en el sistema
                  automatizado de Sur América Cargo marcas, logotipos u otra
                  indicación escrita de los contenidos del paquete. La
                  utilización de embalajes proporcionados por Sur América Cargo
                  y/o su operador logístico no es una garantía de que un
                  artículo está suficientemente embalado para su transportación.
                  Sur América Cargo no proporciona un tratamiento especial para
                  los paquetes con "Frágil", orientación del paquete (por
                  ejemplo, marcas como "UP" flechas o "This End Up"), o
                  cualesquiera otras marcas similares. Al enviar cualquier medio
                  de comunicación conteniendo información personal tal como
                  información financiera personal o de salud, se recomienda que
                  el remitente conserve una copia de los datos y que asegure los
                  datos en medios electrónicos a través de encriptación u otro
                  medio tecnológico. Sur América Cargo no será responsable por
                  la pérdida, deterioro o irrecuperabilidad de los datos
                  almacenados en medios electrónicos de cualquier tipo, ni por
                  la pérdida de información, incluyendo, pero sin limitarse a la
                  información de salud personal o financiera. Para el envío de
                  los medios electrónicos, o para objetos frágiles, consulte las
                  directrices de embalaje establecidos en SurAméricaCargo.com
                  Los lineamientos aconsejan sobre el uso de los “Sur América
                  Cargo Express”, para enviar información personal o artículos
                  frágiles.
                </p>
                <p>
                  Los envíos de Sur América Cargo Worldwide Express Freight
                  deben ser paletizados, apilable, capaces de ser levantados por
                  montacargas, y retráctiles o con bandas en un patín. El
                  Remitente debe asegurarse de que las paletas (pallets) y
                  embalajes cumplen con todas las leyes y reglamentos de los
                  países de origen y de destino.
                </p>

                <p>
                  <b>Recargo para Paquetería Grande</b>
                </p>
                <p>
                  Sur América Cargo aplicará un cargo adicional por los envíos
                  que sean considerados “Paquetes Grandes”. Para solicitar
                  envíos de paquetería grande, debe introducir el número de
                  paquetes que cumplan con el criterio a continuación.
                </p>
                <p>
                  Un paquete es considerado “Paquete Grande” cuando su largo más
                  el grueso (2 x ancho) + (2 x altura) combinados excede 130
                  pulgadas (330cm) pero no excede al tamaño máximo de Sur
                  América Cargo de 165 pulgadas (419cm). Los Paquetes Grandes
                  están sujetos a un mínimo peso facturable de 90 libras (40
                  kgs). No se aplicará otro cargo adicional cuando se cobre el
                  cargo por “Paquete Grande”.
                </p>
                <p>
                  <b>Cargos por Límites Máximos</b>
                </p>
                <p>
                  Los paquetes que excedan las restricciones de peso y medidas
                  establecidas en la sección titulada “Artículos no Aceptados
                  para Transportación” están sujetos a uno o más de los
                  siguientes cargos adicionales:
                </p>
                <p>
                  Peso Máximo (Over Maximum Weight), Largo Máximo (Over Maximum
                  Length), Medida Máxima (Over Maximum Size).
                </p>
                <p>
                  Estos cargos aplican en adición a todos los otros cargos
                  aplicables, incluyendo, pero no limitándose a los recargos por
                  paquetes grandes.
                </p>
                <p>
                  <b>
                    Recargo de Manejo para Pallets de Tamaño Sobredimensionado
                  </b>
                </p>
                <p>
                  Los envíos de Sur América Cargo Worldwide Express Freight,
                  están sujetos a un tamaño máximo y un peso límite que cambian
                  de acuerdo al origen y destino del envío. Los envíos de Sur
                  América Cargo Worldwide Express Freight que excedan dichos
                  límites máximos están sujetos a un cargo de manejo para
                  Pallets de Tamaño Sobredimensionado. Por favor contacte a su
                  representante de servicio al cliente Sur América Cargo para
                  conocer las restricciones aplicables.
                </p>
                <p>
                  <b>Cargo Adicional de Manejo</b>
                </p>
                <p>
                  Un cargo adicional por manejo será considerado por Sur América
                  Cargo, a su sola discreción, por cualquier paquete que
                  requiera un manejo especial, incluyendo, pero no limitándose
                  a:
                </p>
                <p>
                  -Cualquier artículo que esté revestido por fuera de un
                  contenedor de metal o de madera;
                </p>
                <p>
                  -Cualquier artículo cilíndrico, tal como un barril, tambor,
                  cubo, neumático que no esté completamente revestido de un
                  envase de cartón;
                </p>
                <p>
                  -Cualquier paquete que si su lado más largo exceda 60 pulgadas
                  o su segundo lado más largo exceda 30 pulgadas;
                </p>
                <p>
                  -Cualquier paquete que tenga un peso real de más de 70 libras;
                  y
                </p>
                <p>
                  -Cada paquete de los servicios Sur América Cargo, o cualquier
                  envío internacional.
                </p>
                <p>
                  Excluyendo envíos Sur América Cargo Worldwide Express Freight
                  en los que el peso promedio por paquete sea más de 70 libras y
                  el peso de cada paquete no sea especificado en el sistema de
                  envíos de Sur América Cargo.
                </p>
                <p>
                  <b>Derecho de Inspección</b>
                </p>
                <p>
                  Sur América Cargo y/o su operador logístico internacional se
                  reserva el derecho, de abrir e inspeccionar cualquier paquete
                  que se le haya confiado para su transporte.
                </p>
                <p>
                  <b>
                    Disposiciones Relativas al Despacho de Aduanas de Envíos
                    Internacionales
                  </b>
                </p>

                <p>
                  El remitente deberá proporcionar la documentación necesaria
                  para el despacho de aduana. Al suministrar la documentación
                  requerida, el remitente certifica que todas las declaraciones
                  e información relativas a la importación y la exportación son
                  verdaderas y correctas. Además, el remitente entiende que una
                  declaración falsa o fraudulenta podría dar lugar a la
                  imposición de sanciones de tipo civil y penal, incluyendo el
                  decomiso y la venta.
                </p>

                <p>
                  Cuando se le confía un envío a Sur América Cargo y/o su
                  operador logístico internacional, ésta queda designada como
                  mandataria para efectuar, en su caso, el despacho de aduanas.
                </p>

                <p>
                  Sur América Cargo será considerada la destinataria nominal a
                  fin de designar un agente de aduanas para que se encargue del
                  despacho de aduanas. Se impondrán al destinatario, además de
                  cualquier arancel o impuesto aplicable, las sanciones
                  aduaneras, gastos de almacenamiento y demás gastos en los que
                  se incurra a raíz de cualquier acto de la aduana o porque el
                  remitente o el destinatario no hayan presentado la
                  documentación correcta u obtenido los permisos o
                  autorizaciones necesarios.
                </p>

                <p>
                  El remitente será responsable en el caso en que el
                  destinatario incumpla con el pago. Siempre que sea aplicable,
                  prestará servicios de intermediación sin cargo adicional para
                  el despacho de aduana rutinario. Pueden aplicarse cargos
                  adicionales en los casos de procedimientos de despacho
                  complejos que figuran en la Guía de Tarifas.
                </p>
                <p>
                  <b>Tarifas</b>
                </p>
                <p>
                  Las tarifas en vigor son las Tarifas de Sur América Cargo
                  pactadas y/o publicadas a través de la plataforma de servicios
                  que se encuentre vigente en relación con el servicio
                  seleccionado por el remitente, que sea de aplicación al
                  remitente y al paquete y que se encuentre en vigor al tiempo
                  de embarque, más todos los costos o tarifas adicionales
                  correspondientes a servicios extraordinarios, usos
                  extraordinarios o adicionales, y cualesquiera cargos
                  adicionales a los que se haga referencia Sur América Cargo o
                  las tarifas adicionales que resulten aplicables y se detallen
                  en contratos individuales. A fin de determinar el monto de
                  cualquier cargo por servicios.
                </p>
                <p>
                  <b>Pago del Servicio</b>
                </p>

                <p>
                  A menos que hubiesen sido abonados antes del envío, todos los
                  cargos deberán ser pagados antes del embarque de su mercancía
                  o de recibida la factura o dentro del plazo que el remitente
                  hubiese acordado por escrito con Sur América Cargo. A menos
                  que se pruebe lo contrario, se considerará a tales efectos que
                  una factura ha sido recibida dentro de los tres días hábiles
                  siguientes a la fecha de la factura. Todos los pagos
                  realizados por Sur América Cargo en nombre y representación
                  del remitente, el destinatario u otras personas, incluyendo
                  sin carácter limitativo los impuestos, aranceles u otros
                  cargos, serán adeudados y pagaderos por el remitente cuando
                  sean solicitados. Sin perjuicio de cualquier opción de
                  facturación o pago elegida al momento del envío, el remitente
                  es responsable en última instancia por todos los cargos, y
                  acuerda abonar los mismos, incluso en aquellos casos en que el
                  destinatario o un tercero no abonen cualesquiera cargos que se
                  encuentren obligados a abonar.
                </p>

                <p>
                  Cualquier suma pagadera a Sur América Cargo que se encuentre
                  vencida devengará intereses a la tasa especificada en la
                  factura desde la fecha de vencimiento hasta la fecha en la
                  cual Sur América Cargo reciba el pago, ya sea antes o después
                  de una sentencia.
                </p>

                <p>
                  <b>Interrupción del Servicio</b>
                </p>
                <p>
                  Sur América Cargo no será responsable por la Garantía de
                  Servicios y no aplicará a, cualquier interrupción del servicio
                  debido a causas ajenas a su control incluyendo, sin carácter
                  limitativo: la no disponibilidad del destinatario o el rechazo
                  de las mercancías por parte de éste, causas de fuerza mayor,
                  actos de autoridades gubernamentales realizados con facultades
                  reales o aparentes, actos u omisiones de las autoridades
                  aduaneras o similares, información insuficiente suministrada
                  por un cliente, la imposición de regulaciones de seguridad
                  dispuestas por el gobierno o de otra forma aplicables en el
                  lugar de entrega, retenciones dispuestas por una autoridad
                  gubernamental, motines, huelgas y otros conflictos laborales,
                  conflictos civiles, interrupciones de cualquier tipo en las
                  redes de transporte aéreo o terrestre y desastres naturales.
                </p>
                <p>
                  <b>Garantía de Servicio de Sur América Cargo</b>
                </p>

                <p>
                  La entrega a tiempo por parte de Sur América Cargo y/o su
                  operador logístico internacional de envíos correspondientes a
                  ciertos servicios y destinos está respaldada por una garantía
                  en virtud de la cual se devuelve el dinero abonado, los
                  detalles de la Garantía de Servicios de Sur América Cargo,
                  incluyendo su aplicación y limitaciones, y las
                  correspondientes horas límite de entrega y búsqueda del envío
                  en relación con el servicio y destino que correspondan que se
                  encuentre en vigor al momento en el cual las mercancías son
                  aceptadas para su transporte y también pueden ser confirmados
                  contactando a la oficina local de Sur América Cargo. En
                  aquellos casos en que opere la Garantía de Servicio, y las
                  condiciones para la Garantía del Servicio sean satisfechas, si
                  Sur América Cargo no intenta realizar la entrega dentro del
                  período de tiempo aplicable, la empresa si es que se le
                  solicita y a su exclusiva discreción reembolsará al remitente
                  o establecerá un crédito a favor del mismo (o a favor de
                  cualquier persona que hubiese abonado el servicio) en relación
                  con los gastos de transporte (o, en el caso en que no se haya
                  cumplido con el plazo aplicable sólo en relación con alguno de
                  los paquetes incluidos en un envío que conste de varios
                  paquetes, la parte proporcional de los gastos de envío
                  relativos a dichos paquetes), netos de cualesquiera cargos
                  adicionales, Impuesto al Valor Agregado, aranceles o
                  cualesquiera impuestos o tasas.
                </p>

                <p>
                  La Garantía de Servicio no es aplicable en aquellos casos en
                  que la entrega tardía tenga que ver con el incumplimiento de
                  las restricciones o condiciones establecidas en el apartado
                  "Mercancías Manejadas y Restricciones del Servicio", a raíz
                  del ejercicio de cualquier derecho de garantía por parte de
                  Sur América Cargo de acuerdo con los presentes Términos y
                  Condiciones, ya sea que resulte de aplicación el apartado
                  "Rechazo y suspensión de la prestación de servicios" o el
                  apartado "Interrupción del servicio". A fin de evitar dudas,
                  la responsabilidad de Sur América Cargo con arreglo a la
                  Garantía de Servicio se halla limitada a lo anteriormente
                  expuesto y dicha Garantía no constituye de otra forma un tipo
                  de compromiso o declaración respecto de que el envío llegará
                  en cualquier momento en particular.
                </p>

                <p>
                  <b>Opciones de Facturación</b>
                </p>
                <p>
                  Salvo que exista alguna restricción en contrario en el país de
                  origen o de destino, Sur América Cargo ofrece las siguientes
                  opciones de facturación:
                </p>
                <ul className="line-inside list-disc">
                  <li>
                    Servicio prepago - el remitente paga todos los gastos de
                    transporte y el destinatario abona los aranceles e impuestos
                    del país de destino en su caso.
                  </li>

                  <li>
                    Por Cobrar - el destinatario paga todos los gastos de
                    transporte y, en su caso, los aranceles e impuestos del país
                    de destino.
                  </li>

                  <li>
                    FOB (free on board - libre a bordo) - el remitente abona los
                    cargos hasta el punto de exportación, y el destinatario paga
                    el saldo.
                  </li>

                  <li>
                    CIF (cost and freight – costo, flete y seguro) - el
                    remitente abona los costos de transporte hasta el punto de
                    importación, y el destinatario paga el saldo.
                  </li>

                  <li>
                    Arancel de entrega abonado, IGV y/o IVA. impago - el
                    remitente paga el arancel del país de destino, de
                    corresponder, además de todos los cargos de transporte, y el
                    destinatario abona el I.V.A. del país de destino (ver
                    "Disposiciones Relativas al Despacho de Aduanas").
                  </li>

                  <li>
                    Facturación de los costos, aranceles e impuestos de envío al
                    remitente - el remitente abona los aranceles e impuestos del
                    país de destino, de corresponder, además de todos los gastos
                    de envío. El remitente debe notificar a quien abonará la
                    factura con anterioridad al envío si se selecciona una
                    opción que no sea el servicio prepago, y esta opción deberá
                    indicarse en la Guía Aérea Sur América Cargo y/o su operador
                    logístico internacional en el espacio reservado al efecto.
                    El remitente será responsable del pago en el caso en que
                    éste no sea efectuado por el destinatario o por un tercero.
                  </li>
                </ul>

                <p>
                  <b>Responsabilidad por Pérdida o Daños</b>
                </p>
                <p>
                  Cuando resulten aplicables el Convenio de Varsovia o el
                  Convenio CMR o cualesquiera leyes nacionales que implementen o
                  adopten tales convenios (a las cuales se hará referencia como
                  Reglas Convencionales por razones de conveniencia), o en
                  aquellos casos en que, y en tanto y en cuanto, otras leyes
                  nacionales imperativas resulten de aplicación, la
                  responsabilidad de Sur América Cargo y/o su operador logístico
                  internacional se regirá de conformidad con las normas
                  aplicables y quedará limitada de acuerdo con las mismas. En
                  los casos en que no sean de aplicación las Reglas
                  Convencionales u otras leyes imperativas nacionales, Sur
                  América Cargo sólo será responsable por no actuar con el
                  cuidado y habilidad razonables y su responsabilidad estará
                  exclusivamente regida por los presentes Términos y Condiciones
                  y (salvo en el caso de accidentes personales o muerte) estará
                  limitada a daños probados en una cuantía que no podrán superar
                  los US$100 por envío, a menos que el remitente haya declarado
                  un valor superior como se establece más adelante. Si el
                  reclamante (o cualquier persona en cuyos derechos el
                  reclamante se haya subrogado) ha causado o contribuido con
                  cualquier pérdida, daño o demora en relación con un envío o
                  paquete, cualquier responsabilidad en la que Sur América Cargo
                  pueda incurrir en relación con dichos eventos (limitada como
                  se indica más arriba) podrá quedar reducida o extinguida de
                  acuerdo con la ley aplicable a dicha responsabilidad
                  concurrente. Sujeto a las disposiciones del párrafo que se
                  indica más adelante, el remitente podrá tener derecho en
                  relación con un envío a un mayor límite de responsabilidad que
                  el que Sur América Cargo toma a su cargo con arreglo al punto
                  (ii) del apartado "Mercancías Manejadas y Restricciones del
                  Servicio" que figura más arriba o el que se estipula en las
                  Reglas Convencionales u otras leyes nacionales imperativas. El
                  remitente podrá tener derecho al mayor límite de
                  responsabilidad si declara un valor mayor para transporte en
                  la Guía Aérea Sur América Cargo y/o su operador logístico
                  internacional y si abona un cargo adicional según se estipula
                  o pactada. Si el remitente declara un valor mayor para
                  transporte y paga el cargo aplicable, la responsabilidad de
                  Sur América Cargo quedará limitada al monto máximo del valor
                  declarado para transporte. El valor de las mercancías
                  involucradas en ningún caso excederá los límites especificados
                  en el apartado "Mercancías Manejadas y Restricciones del
                  Servicio". Sur América Cargo no ofrece seguro en relación con
                  la carga del remitente. Los remitentes que deseen obtener un
                  seguro en relación con su carga, o un seguro contra todo
                  riesgo, deberán contratar dicho seguro de terceros. Excepto en
                  los casos en que las Reglas Convencionales aplicables u otras
                  leyes nacionales imperativas aplicables requieran lo
                  contrario, Sur América Cargo no será responsable por daños que
                  deban ser objeto de una prueba específica, indirectos o
                  remotos, incluyendo pérdidas meramente económicas, como por
                  ejemplo los costos de cualesquiera medios alternativos de
                  transporte, pérdida de ganancias, pérdida de oportunidades de
                  negocios o de ingresos que surjan de la pérdida de uso,
                  resultantes de cualquier pérdida o daño o demora en relación
                  con un envío o paquete, ya sea o no que se hubiese declarado
                  un valor como se especifica más arriba. Sur América Cargo y/o
                  su operador logístico internacional no será responsable por
                  cualesquiera daños resultantes de su imposibilidad o falta de
                  cumplimiento con una solicitud de parada, o rechazo de cumplir
                  con la misma, o respecto de un pedido de regreso o desvío
                  relativos al envío de un paquete, una vez que éste le hubiese
                  sido confiado.
                </p>

                <p>
                  <b>Exclusiones de Responsabilidad</b>
                </p>
                <p>
                  Sur América Cargo no estará obligada ni será responsable por:
                </p>

                <ul className="list-inside list-disc">
                  <li>
                    Pérdida o daño a artículos de valor inusual (Como se define
                    en estos Términos);
                  </li>
                  <li>Pérdida o daño a Cartas Pre-pagadas.</li>
                  <li>
                    Pérdida o daño resultante de insectos, polillas, animales
                    dañinos, vicio inherente, deterioro, humedad de atmósfera,
                    temperatura extrema, desgaste y deterioro ordinarios, o
                    aquello que ocurrió o surgió antes de o después del curso
                    del transporte por Sur América Cargo y/o su operador
                    logístico internacional.
                  </li>
                  <li>
                    Pérdida o daño resultante de empaque o envoltura impropios,
                    inadecuados o inseguros que no cumplan con las normas
                    publicadas de Sur América Cargo con relación a ello
                    establecidas en los Términos o en la plataforma de
                    SurAméricaCargo.com.
                  </li>
                  <li>
                    Pérdida o daño a Productos Perecederos hasta el punto que la
                    pérdida o daño resulte de la exposición a calor o frío o a
                    la naturaleza perecedera del artículo.
                  </li>
                  <li>
                    Pérdida o daño a restos humanos, restos fetales, partes
                    corporales humanas, o componentes de ello.
                  </li>
                  <li>Pérdida o daño a tubos fluorescentes o focos.</li>
                  <li>
                    Pérdida de, daño a, o irrecuperabilidad de datos almacenados
                    en cualquier tipo de medio, o de información Incluyendo sin
                    limitación información personal, de salud o financiera.
                  </li>
                  <li>
                    Pérdida o daño debido a actos de la naturaleza, desastres
                    naturales, riesgos de guerra, actos de terrorismo, daño
                    nuclear, actos de autoridades públicas actuando con
                    autoridad real o aparente, actos u omisiones de autoridades
                    de aduanas o similares, autoridad de la ley, la aplicación
                    de regulaciones de seguridad impuestas por el gobierno o de
                    otra manera aplicables al embarque, revueltas, huelgas, u
                    otras disputas laborales, disturbios civiles, interrupciones
                    de las redes de transporte aéreas o terrestres, nacionales o
                    locales (incluyendo pero no limitado a, la red de transporte
                    de Sur América Cargo), interrupción o falla de sistemas de
                    comunicaciones e información, o condiciones adversas del
                    clima.
                  </li>
                  <li>
                    Pérdida o daño a cualquier embarque que contenga artículos a
                    los que a los remitentes les esté prohibido embarcar, que
                    Sur América Cargo y/o su operador logístico internacional no
                    autoriza o no está autorizada a aceptar para el transporte,
                    que Sur América Cargo declare que no aceptará o que el
                    operador logístico internacional tenga un derecho a rehusar.
                  </li>
                </ul>

                <p>
                  Sur América Cargo no será responsable por ninguna pérdida o
                  daño que surja de proporcionar servicio a, o a nombre de, una
                  persona o entidad que obtiene tales servicios, incluyendo
                  entrega de propiedad por trampa, falsa apariencia, u otra
                  treta fraudulenta.
                </p>

                <p>
                  Sur América Cargo no será responsable por ningún daño que
                  surja de la incapacidad, omisión o negativa de cumplir con una
                  solicitud para parar, retornar, o reencaminar el embarque de
                  un paquete después de ser entregado a Sur América Cargo.
                </p>

                <p>
                  Sur América Cargo no será responsable por ninguna interrupción
                  de servicio debida a causas fuera del control de Sur América
                  Cargo incluyendo, pero no limitado a: la indisponibilidad o
                  negativa de una persona a aceptar la entrega del embarque,
                  actos de la naturaleza, desastres naturales, riesgos de
                  guerra, actos de terrorismo, actos de las autoridades públicas
                  actuando con autoridad real o aparente, actos u omisiones de
                  autoridades de aduanas o similares, autoridad de la ley,
                  insuficiente información provista por un cliente, paquetes de
                  Materiales Peligrosos indebidamente ofrecidos para transporte,
                  la aplicación de regulaciones de seguridad impuestas por el
                  gobierno o de otra manera aplicables al embarque, revueltas,
                  retención por agencia gubernamental, huelgas, u otras disputas
                  laborales, disturbios civiles, interrupciones de las redes de
                  transporte aéreas o terrestres, nacionales o locales
                  (incluyendo pero no limitado a, la red de transporte de Sur
                  América Cargo y/o su operador logístico internacional),
                  interrupción o falla de sistemas de comunicaciones e
                  información, o condiciones adversas del clima.
                </p>

                <p>
                  BAJO NINGUNA CIRCUNSTANCIA SUR AMÉRICA CARGO Y/O SU OPERADOR
                  LOGISTICO INTERNACIONAL SERÁ RESPONSABLE POR NINGUNOS DAÑOS Y
                  PERJUICIOS ESPECIALES, INCIDENTALES, O EMERGENTES, INCLUYENDO,
                  PERO NO LIMITADO A, DAÑOS Y PERJUICIOS QUE SURJAN DE PÉRDIDA,
                  ENTREGA EQUÍVOCA DE, O DAÑO A LA PROPIEDAD, ENTREGA DEMORADA,
                  U OMISIÓN DE INTENTAR ENTREGA DE ACUERDO CON LA GARANTÍA DE
                  SERVICIO DE SUR AMÉRICA CARGO, ASÍ SUR AMÉRICA CARGO TUVO O NO
                  CONOCIMIENTO DE QUE TALES DAÑOS Y PERJUICIOS PODRÍAN SER
                  INCURRIDOS. BAJO NINGUNA CIRCUNSTANCIA U-ENVIOS SERÁ
                  RESPONSABLE POR CUALESQUIER DAÑOS Y PERJUICIOS DE CUALQUIER
                  NATURALEZA POR ENTREGA DEMORADA, EXCEPTO COMO SE DISPONGA
                  ESPECÍFICAMENTE PARA EMBARQUES HECHOS BAJO LA GARANTÍA DE
                  SERVICIO DE U-ENVIOS.
                </p>

                <p>
                  La aceptación para transporte de cualquier embarque que
                  contenga artículos a los que a los remitentes les está
                  prohibido embarcar, que Sur América Cargo no autorice o no
                  esté autorizada a aceptar para transporte, que declare que no
                  aceptará, o que tenga un derecho a rehusar, no constituye una
                  renuncia de ninguna disposición de los Términos o Guía de
                  Servicio que limite la obligación o responsabilidad de Sur
                  América Cargo por cualquier tal paquete o embarque.
                </p>
                <p>
                  <b>Límite Temporal para Reclamos</b>
                </p>
                <p>
                  Todos los reclamos contra Sur América Cargo deberán ser
                  presentados por escrito tan pronto como sea practicable y en
                  cualquier caso dentro de los 10 días de la entrega en caso de
                  daño (incluyendo la pérdida parcial de un envío) y en caso de
                  demora dentro de los 21 días de entrega. Además, Sur América
                  Cargo no tendrá responsabilidad en relación con envío alguno a
                  menos que se inicien acciones legales y se notifiquen a Sur
                  América Cargo por escrito dentro de los seis meses posteriores
                  a la entrega de las mercancías involucradas o, en el caso en
                  que la entrega no se hubiese producido, dentro de los seis
                  meses de la fecha programada de entrega. La presente
                  disposición no afectará los derechos que el remitente pueda
                  tener con arreglo a las reglas convencionales aplicables u
                  otras leyes nacionales imperativas que resulten de aplicación.
                </p>
                <p>
                  <b>Indemnización del remitente</b>
                </p>
                <p>
                  El remitente conviene en indemnizar, defender, y mantener
                  libre de daño a Sur América Cargo, su compañía matriz, y
                  compañías afiliadas, sus funcionarios, directores, empleados,
                  agentes y sus sucesores y cesionarios, de toda reclamación,
                  demanda, gasto, obligación, causa de acción, procedimientos de
                  ejecución, y juicios de cualquier clase o naturaleza
                  entablados por una agencia gubernamental o cualquier otra
                  persona o entidad, que surjan de o se relacionen con el
                  incumplimiento del remitente con leyes o regulaciones
                  gubernamentales aplicables al embarque, o requisitos de Sur
                  América Cargo aplicables al embarque, provenientes de que el
                  remitente entregue algún artículo que esté prohibido embarcar,
                  o provenientes de la omisión del remitente de cumplir con los
                  Términos.
                </p>
                <p>
                  <b>Protección de Datos</b>
                </p>
                <p>
                  El remitente acepta que Sur América Cargo y/o su operador
                  logístico internacional y otras compañías del grupo de
                  empresas a nivel mundial, incluyendo compañías ubicadas en
                  países que pueden no tener el mismo nivel de protección de
                  datos que el país en el cual el envío es presentado a Sur
                  América Cargo para su transporte, pueden utilizar datos
                  suministrados por el remitente a Sur América Cargo con fines
                  de análisis y supervisión para el área de administración de la
                  compañía, la compra y suministro de materiales para clientes,
                  la administración de cuentas de clientes y la promoción de
                  servicios y productos suministrados por el grupo de compañías
                  Sur América Cargo. El remitente puede tener derecho en algunos
                  casos con arreglo a la ley de acceder a datos, rectificarlos y
                  objetar el uso de dichos datos que sobre él posea Sur América
                  Cargo para propósitos de comercialización directa.
                </p>
                <p>
                  <b>Acuerdo Completo</b>
                </p>
                <p>
                  Todos los envíos se hallan sujetos a los términos y
                  condiciones incluidos y/o pactados en la plataforma de Sur
                  América Cargo y los que se detallan en el sitio Web. Servicios
                  de Sur América Cargo que se encuentre en vigor y la
                  descripción de los Servicios de Sur América Cargo que figuran
                  en el sitio www.suramericacargo.com, que son incorporados para
                  cada envío, constituyen en su conjunto el acuerdo completo y
                  exclusivo de las partes, salvo según se modifique en virtud de
                  cualesquiera acuerdos existentes o futuros celebrados entre
                  las partes, y no podrán ser contradichos o modificados en
                  virtud de un acuerdo oral.
                </p>
                <p>
                  <b>Divisibilidad</b>
                </p>
                <p>
                  Los presentes Términos y Condiciones se aplicarán en la máxima
                  medida permitida por la ley aplicable. Si cualquier parte de
                  los presentes Términos y Condiciones no es exigible, ello no
                  afectará la exigibilidad de cualquier otra parte.
                </p>
                <p>
                  <b>Condiciones</b>
                </p>
                <p>
                  El Servicio de Garantía de Sur América Cargo está sujeto a las
                  siguientes condiciones:
                </p>

                <p>
                  -El horario de entrega garantizado de Sur América Cargo y/o su
                  operador logístico internacional ha sido obtenido o pactado a
                  través del sitio Web de www.suramericacargo.com o contactando
                  a un Representante de la Oficina de Servicio al Cliente de Sur
                  América Cargo. “En Tiempo” o “En Horario” significa, sujeto a
                  los términos de esta Garantía del Servicio de Sur América
                  Cargo la entrega es intentada dentro del horario de entrega
                  garantizado.
                </p>

                <p>
                  -Cada paquete y envío es correctamente registrado en el
                  Sistema de Envíos de Sur América Cargo y/o su operador
                  logístico internacional. Cada paquete y envío tiene una
                  etiqueta de rastreo y una etiqueta de dirección, o una
                  etiqueta combinada generada por un sistema automatizado de
                  envío, mostrando el nombre correcto del consignatario,
                  dirección de entrega (Sur América Cargo no proporciona la
                  entrega a apartado postal o de correo), y Código postal (o el
                  código postal para los envíos internacionales). Además, Sur
                  América Cargo se reserva el derecho, a su sola discreción, de
                  negarse a cumplir con una solicitud de crédito o reembolso de
                  los gastos de transporte de un paquete o envío cuando este
                  paquete o envío no tenga una etiqueta y / o etiqueta de subida
                  puntual o cuando la dirección de entrega en cualquier etiqueta
                  de dirección o la etiqueta combinada fijada al paquete no
                  coincide con la dirección de envío en la etiqueta para el
                  paquete.
                </p>

                <p>
                  -Cada paquete tendrá, por cada envío, una etiqueta de Entrega
                  de Sábados de Sur América Cargo y/o su operador logístico
                  internacional siempre que se solicite la entrega opcional para
                  el día sábado y esta opción esté disponible.
                </p>

                <p>
                  -Cada envío se presentará a Sur América Cargo durante las
                  horas de negocio publicadas. Los envíos recibidos desde o con
                  destino a determinados lugares pueden requerir tiempos de
                  recogida anteriores.
                </p>

                <p>
                  - Sur América Cargo es notificado por teléfono o a través del
                  Centro de facturación de Sur América Cargo en línea en
                  u-envios.com de un fallo en el servicio dentro de los quince
                  (15) días calendarios a partir de la fecha de entrega
                  programada y se le informa del nombre del destinatario y
                  dirección, fecha de envío, el peso del envío y el número de
                  seguimiento de Sur América Cargo.
                </p>

                <p>
                  -Para los envíos de Sur América Cargo Worldwide Expedited, la
                  garantía se aplicará solamente a los envíos con origen o
                  destino EE.UU. y cuando la parte que recibe la factura es
                  residente en los Estados Unidos y es responsable de todos los
                  gastos de envío.
                </p>

                <p>
                  -Para envíos de carga Sur América Cargo Worldwide Express
                  Freight, la garantía será aplicable a un envío de más de 4400
                  libras sólo si el remitente obtuvo la confirmación de
                  elegibilidad para la
                </p>

                <p>
                  Garantía de Servicio, previa la entrega del envío a Sur
                  América Cargo para su servicio. Sur América Cargo se reserva
                  el derecho de rechazar cualquier solicitud de un crédito o
                  reembolso cuando la solicitud esté bien (a) hecha por, o (b)
                  con base en la información obtenida por un partido que no sea
                  el pagador de los gastos de envío.
                </p>
                <p>
                  <b>Ley Aplicable</b>
                </p>
                <p>
                  Los presentes Términos y Condiciones y cualquier contrato
                  celebrado que los incorpore quedarán regidos en todos sus
                  aspectos por las leyes del país en el que el envío es
                  presentado ante Sur América Cargo Y/O SU OPERADOR LOGISTICO
                  INTERNACIONAL para su transporte.
                </p>
              </>
            </TermsModal>
            <div className="relative mt-12 pt-5 border-t border-white/50 text-sm min-w-[320px]:w-28 w-28">
              <button
                className="text-blue-100/50 hover:text-blue-800"
                // onClick={() => setIsModalOpen(true)}
                onClick={Viewes}
              >
                Terminos y Condiciones
              </button>
            </div>
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center max-[768px]:justify-center">
                <Phone size={18} className="mr-2" />
                <span>+51927613970</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <Mail size={18} className="mr-2" />
                <span>info@suramericacargo.com</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <MapPin size={18} className="mr-2" />
                <span>Av. Alfredo Mendiola 3471 Los Olivos, Lima</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center">
            <h3 className="text-xl font-semibold mb-2 max-[768px]:text-center">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Envios-Internacionales/61557105217820/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/envioszoom/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Sur América Cargo. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
