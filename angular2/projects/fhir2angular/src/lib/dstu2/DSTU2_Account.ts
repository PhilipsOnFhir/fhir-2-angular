import { DSTU2_AccountStatusEnum } from './DSTU2_AccountStatusEnum'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Account      extends DSTU2_DomainResource
{

   static def : string = 'Account';
   identifier : DSTU2_Identifier [];
   name : string ;
   type : DSTU2_CodeableConcept ;
   status : DSTU2_AccountStatusEnum ;
   activePeriod : DSTU2_Period ;
   currency : DSTU2_Coding ;
   balance : DSTU2_Money ;
   coveragePeriod : DSTU2_Period ;
   subject : DSTU2_Reference ;
   owner : DSTU2_Reference ;
   description : string ;
}
