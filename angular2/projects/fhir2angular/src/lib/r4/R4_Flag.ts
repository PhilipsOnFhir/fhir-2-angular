import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FlagStatusEnum } from './R4_FlagStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Flag      extends R4_DomainResource
{

   static def : string = 'Flag';
   identifier : R4_Identifier [];
   status : R4_FlagStatusEnum ;
   category : R4_CodeableConcept [];
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   period : R4_Period ;
   encounter : R4_Reference ;
   author : R4_Reference ;
}
