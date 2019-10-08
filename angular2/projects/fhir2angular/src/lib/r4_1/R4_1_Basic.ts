import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Basic      extends R4_1_DomainResource
{

   static def : string = 'Basic';
   identifier : R4_1_Identifier [];
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   created : string ;
   author : R4_1_Reference ;
}
