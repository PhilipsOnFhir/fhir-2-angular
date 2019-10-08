import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_FlagStatusEnum } from './DSTU2_FlagStatusEnum'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Flag      extends DSTU2_DomainResource
{

   static def : string = 'Flag';
   identifier : DSTU2_Identifier [];
   category : DSTU2_CodeableConcept ;
   status : DSTU2_FlagStatusEnum ;
   period : DSTU2_Period ;
   subject : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   author : DSTU2_Reference ;
   code : DSTU2_CodeableConcept ;
}
