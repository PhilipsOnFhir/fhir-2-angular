import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContraindicationSeverityEnum } from './DSTU2_ContraindicationSeverityEnum'
import { DSTU2_Contraindication_Mitigation } from './DSTU2_Contraindication_Mitigation'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Contraindication      extends DSTU2_DomainResource
{

   static def : string = 'Contraindication';
   patient : DSTU2_Reference ;
   category : DSTU2_CodeableConcept ;
   severity : DSTU2_ContraindicationSeverityEnum ;
   implicated : DSTU2_Reference [];
   detail : string ;
   date : string ;
   author : DSTU2_Reference ;
   identifier : DSTU2_Identifier ;
   reference : string ;
   mitigation : DSTU2_Contraindication_Mitigation [];
}
