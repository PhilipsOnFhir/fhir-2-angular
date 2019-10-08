import { R5_AccountStatusEnum } from './R5_AccountStatusEnum'
import { R5_Account_Coverage } from './R5_Account_Coverage'
import { R5_Account_Guarantor } from './R5_Account_Guarantor'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Account      extends R5_DomainResource
{

   static def : string = 'Account';
   identifier : R5_Identifier [];
   status : R5_AccountStatusEnum ;
   type : R5_CodeableConcept ;
   name : string ;
   subject : R5_Reference [];
   servicePeriod : R5_Period ;
   coverage : R5_Account_Coverage [];
   owner : R5_Reference ;
   description : string ;
   guarantor : R5_Account_Guarantor [];
   partOf : R5_Reference ;
}
