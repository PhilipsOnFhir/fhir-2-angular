import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicinalProductPharmaceutical_Characteristics } from './R4_MedicinalProductPharmaceutical_Characteristics'
import { R4_MedicinalProductPharmaceutical_RouteOfAdministration } from './R4_MedicinalProductPharmaceutical_RouteOfAdministration'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductPharmaceutical      extends R4_DomainResource
{

   static def : string = 'MedicinalProductPharmaceutical';
   identifier : R4_Identifier [];
   administrableDoseForm : R4_CodeableConcept ;
   unitOfPresentation : R4_CodeableConcept ;
   ingredient : R4_Reference [];
   device : R4_Reference [];
   characteristics : R4_MedicinalProductPharmaceutical_Characteristics [];
   routeOfAdministration : R4_MedicinalProductPharmaceutical_RouteOfAdministration [];
}
