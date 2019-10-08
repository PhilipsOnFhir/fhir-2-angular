import { R4_AccountStatusEnum } from './R4_AccountStatusEnum'
import { R4_Account_Coverage } from './R4_Account_Coverage'
import { R4_Account_Guarantor } from './R4_Account_Guarantor'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Account      extends R4_DomainResource
{

   static def : string = 'Account';
   identifier : R4_Identifier [];
   status : R4_AccountStatusEnum ;
   type : R4_CodeableConcept ;
   name : string ;
   subject : R4_Reference [];
   servicePeriod : R4_Period ;
   coverage : R4_Account_Coverage [];
   owner : R4_Reference ;
   description : string ;
   guarantor : R4_Account_Guarantor [];
   partOf : R4_Reference ;
}
