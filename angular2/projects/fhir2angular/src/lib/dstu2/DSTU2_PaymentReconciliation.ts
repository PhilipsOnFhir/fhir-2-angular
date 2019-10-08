import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_PaymentReconciliation_Detail } from './DSTU2_PaymentReconciliation_Detail'
import { DSTU2_PaymentReconciliation_Note } from './DSTU2_PaymentReconciliation_Note'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_PaymentReconciliation      extends DSTU2_DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : DSTU2_Identifier [];
   request : DSTU2_Reference ;
   outcome : string ;
   disposition : string ;
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   period : DSTU2_Period ;
   organization : DSTU2_Reference ;
   requestProvider : DSTU2_Reference ;
   requestOrganization : DSTU2_Reference ;
   detail : DSTU2_PaymentReconciliation_Detail [];
   form : DSTU2_Coding ;
   total : DSTU2_Money ;
   note : DSTU2_PaymentReconciliation_Note [];
}
