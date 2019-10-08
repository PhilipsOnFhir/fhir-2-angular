import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicinalProductPharmaceutical_Characteristics } from './R4_1_MedicinalProductPharmaceutical_Characteristics'
import { R4_1_MedicinalProductPharmaceutical_RouteOfAdministration } from './R4_1_MedicinalProductPharmaceutical_RouteOfAdministration'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductPharmaceutical      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductPharmaceutical';
   identifier : R4_1_Identifier [];
   administrableDoseForm : R4_1_CodeableConcept ;
   unitOfPresentation : R4_1_CodeableConcept ;
   ingredient : R4_1_Reference [];
   device : R4_1_Reference [];
   characteristics : R4_1_MedicinalProductPharmaceutical_Characteristics [];
   routeOfAdministration : R4_1_MedicinalProductPharmaceutical_RouteOfAdministration [];
}
