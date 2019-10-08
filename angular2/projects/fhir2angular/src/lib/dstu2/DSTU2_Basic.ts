import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Basic      extends DSTU2_DomainResource
{

   static def : string = 'Basic';
   identifier : DSTU2_Identifier [];
   code : DSTU2_CodeableConcept ;
   subject : DSTU2_Reference ;
   author : DSTU2_Reference ;
   created : string ;
}
