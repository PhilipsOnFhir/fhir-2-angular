import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FlagStatusEnum } from './R4_1_FlagStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Flag      extends R4_1_DomainResource
{

   static def : string = 'Flag';
   identifier : R4_1_Identifier [];
   status : R4_1_FlagStatusEnum ;
   category : R4_1_CodeableConcept [];
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   period : R4_1_Period ;
   encounter : R4_1_Reference ;
   author : R4_1_Reference ;
}
