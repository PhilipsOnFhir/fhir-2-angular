import { DSTU2_ContactPointSystemEnum } from './DSTU2_ContactPointSystemEnum'
import { DSTU2_ContactPointUseEnum } from './DSTU2_ContactPointUseEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_ContactPoint      extends DSTU2_Element
{

   static def : string = 'ContactPoint';
   system : DSTU2_ContactPointSystemEnum ;
   value : string ;
   use : DSTU2_ContactPointUseEnum ;
   rank : string ;
   period : DSTU2_Period ;
}
